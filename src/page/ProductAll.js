import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    try {
      let searchQuery = query.get("q") || "";

      let response = await fetch("/db.json");
      if (!response.ok) throw new Error("db.json not found");

      let data = await response.json();

      let filteredData = Array.isArray(data.products)
        ? data.products.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [];

      setProductList(filteredData);
    } catch (error) {
      console.error("Error loading products:", error);
      setProductList([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container className="mainPage">
        <Row className="ProductImgall">
          {productList.map((menu) => (
            <Col xs={12} md={4} xl={3} key={menu.id}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
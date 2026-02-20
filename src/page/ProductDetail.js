import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    try {
      const response = await fetch("/db.json");

      if (!response.ok) {
        throw new Error("Failed to load db.json");
      }

      const data = await response.json();

      // id는 문자열이므로 숫자로 변환해서 비교
      const foundItem = data.products.find(
        (item) => item.id === parseInt(id)
      );

      setProduct(foundItem);
    } catch (error) {
      console.error("Error loading product detail:", error);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (!product) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <Container className="DetailPage">
      <Row>
        <Col>
          <img
            className="detailImg"
            src={product.img}
            alt={product.title}
          />
        </Col>
        <Col>
          <div className="items-list">{product.title}</div>
          <div className="items-list">{product.price}</div>
          <div className="items-list">
            {product.choice ? "Conscious choice" : ""}
          </div>

          <Dropdown className="dropdownBtn">
            <Dropdown.Toggle variant="light">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.size?.map((size) => (
                <Dropdown.Item key={size}>
                  {size}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Button className="btn-dark mt-3" variant="dark">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
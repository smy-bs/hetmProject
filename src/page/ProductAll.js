import React, { useEffect,useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
      const [productList, setProductList] = useState([]);
      const [query, setQuery] = useSearchParams();

      const getProducts = async () => {

      let searchQuery = query.get('q')|| "";
      console.log("query?",searchQuery);
      let url = ` https://my-json-server.typicode.com/smy-bs/hetmProject/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data)
    };

    useEffect (()=> {
    getProducts();
  },[query]);
 

  return (
    <div>
      <Container className="mainPage">
      <Row className="ProductImgall">
                {productList.map(menu => 
                    <Col xs={12} md={4} xl={3} key={menu.id}>
                      <ProductCard item={menu} /></Col>
                )}
            </Row>
      </Container>
    
    </div>
  )
}

export default ProductAll

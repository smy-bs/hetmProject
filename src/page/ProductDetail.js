import React, { useEffect,useState } from 'react';
import { Container, Row, Col, Dropdown,Button } from 'react-bootstrap';
import {useParams} from "react-router-dom";


const ProductDetail = () => {
  let{id} = useParams();
  const[product,setProduct]= useState(null);

  const getProductDetail = async () => {
    let url = ` https://my-json-server.typicode.com/smy-bs/hetmProject/products/${id}`;
    let response = await fetch(url);
    let data =  await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(()=>{
       getProductDetail();
  },[])

  return ( 
    <Container>
     <Row>
      <Col>
      <img src={product?.img}/></Col>
      <Col>
      <div className="items-list">{product?.title}</div>
      <div className="items-list">{product?.price}</div>
      <div className="items-list">{product?.choice == true? "Concious choice":""}</div>
      
      <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" >
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        
          <Button className="btn-dark" variant="dark">추가</Button>
      
      </Col>
     </Row>
    </Container>
  );
};

export default ProductDetail

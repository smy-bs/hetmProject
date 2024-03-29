import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';



const Login = ({setAuthenticate
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginUser = (event) =>{
    if(email === '' || password === '') {
      alert('Email과 password를 입력해주세요.');
      return;
  };
    event.preventDefault(); // 페이지 새로고침방지
    
    setAuthenticate(true);
    navigate('/');
  }

  return (
    <div className="form_section">
      <Container>
       <Form className="form-Group" onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email"
        value={email} onChange={(event) => {setEmail(event.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your Password"
         value={password} onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit" className="btn_login">
        Login
      </Button>
    </Form>
    </Container>
    </div>
  );
};



export default Login

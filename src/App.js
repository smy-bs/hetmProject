import {useState,useEffect} from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./route/PrivateRoute";
import Footer from "./component/Footer";

function App() {
  const [authenticate,setAuthenticate]=useState(false) // true면 로그인이 되고 fqlse면 로그인이 안됨
  useEffect(()=>{
    console.log("aaa",authenticate);
  },[authenticate])

  return ( 
  <div>
  <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
   <Routes>
    <Route path="/" element={<ProductAll/>} /> 
    <Route path="/login" element={<Login setAuthenticate ={setAuthenticate}/>} /> 
    <Route path="/Product/:id" element={<PrivateRoute authenticate={authenticate}/>} /> 
  </Routes>
  <Footer />
</div>
  );
}

export default App;

import {useState,useEffect} from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate,setAuthenticate]=useState(false) // true면 로그인이 되고 fqlse면 로그인이 안됨
  useEffect(()=>{
    console.log("aaa",authenticate);
  },[authenticate])
  return <div>
  <Navbar />
   <Routes>
    <Route path="/" element={<ProductAll/>} /> 
    <Route path="/login" element={<Login setAuthenticate ={setAuthenticate}/>} /> 
    <Route path="/Product/:id" element={<PrivateRoute authenticate={authenticate}/>} /> 
  </Routes>

</div>
  
}

export default App;

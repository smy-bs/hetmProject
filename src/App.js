import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <div>
    <Navbar />
   <Routes>
    <Route path="" element={<ProductAll/>} /> 
    <Route path="/login" element={<Login/>} /> 
    <Route path="/Product:id" element={<ProductDetail/>} /> 
  </Routes>

</div>
  
}

export default App;

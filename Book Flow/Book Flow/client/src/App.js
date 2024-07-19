import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
// import AppWrapper from "./AppWrapper";
import Register from "./pages/Auth/Register"
import Login from "./pages/Auth/Login";
import Home from "./pages/Buyer/Home";
import Cart from "./pages/Buyer/Cart";
import Private from "./components/Private";
import ProtectedRoutes from "./ProtectedRoutes";

import Dashboard from "./pages/Seller/DashBoard/Dashboard";
import SellProducts from "./pages/Seller/SellProducts/SellProducts";
import AddProduct from "./pages/Seller/AddProduct/AddProduct";
import UpdateProduct from "./pages/Seller/UpdateProduct/UpdateProduct";

// import ProtectedRoutes from "./ProtectedRoutes"
import ProductDetails from "./components/ProductDetails";
import EachProduct from "./pages/Buyer/EachProduct";

function App() {
  return (
  <BrowserRouter>
  
        <div>
          
        
          <Routes>
           
             <Route path="/" element={<Home/>}></Route>
             <Route path="/private" element={<ProtectedRoutes />}>
             <Route path="/private" element={<Private />}></Route>
             </Route>
             <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/sell" element={<Dashboard/>}></Route>
            <Route path="/sell/addproduct" element={<AddProduct/>}></Route>
            <Route path="/sell/products" element={<SellProducts/>}></Route>
            <Route path="/sell/products/:id" element={<UpdateProduct/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/buy/products/:id" element={<EachProduct/>}></Route>
            


            <Route path="/product/:slug" element={<ProductDetails />}></Route>
            
          </Routes>
          
          
        </div>
      </BrowserRouter>
  )
}

export default App;

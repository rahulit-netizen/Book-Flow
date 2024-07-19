import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

import Sidebar from "../../../components/Seller/Sidebar";
import "./sellProduct.css"
import axios from 'axios';
import { useContext } from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import { ProductDataContext } from '../../../Context/ProductDataContext';
import Cookies from "universal-cookie";
import jwtDecode from 'jwt-decode';

const cookies = new Cookies();

const SellProducts =  () => {

  const token = cookies.get("TOKEN");
  const user1=jwtDecode(token);

   const [productDataState,setProductDataState] = useContext(ProductDataContext)
     // const[data,setData] =useState([])
    const[url1,seturl1]=useState("");

    //  console.log(user1.userEmail);
   
   useEffect(() => {
      const configuration = {
      method: "delete",
      url: url1,
      data:{
          sellerEmail:user1.userEmail
        }
    };

    
   axios(configuration)
   .then((result) => {
    console.log(result);
   })
   .catch((error) => {
     console.log(error);
   });
  
}, [url1]);

const handleDelete =(e)=>
{
 if(window.confirm("Are you sure you want to delete"))
 {
   const id= e.target.value;
   seturl1("http://localhost:5000/sell/products/"+id)
 }
}




  return (
    <>
    <Navbar/>
    <br/>
    <div class=" flex space-between"> 
    <Sidebar/> 

    <div className="product1 flex-4 ml-10">
    <div className="productTitleContainer flex items-center justify-between">
      <h1 class="text-3xl"> <b>Product</b></h1>
      <Link to="/sell/addproduct">
        <button className="productAddButton w-36 border-none p-1.5 bg-teal color-white rounded-md cursor-pointer">Create New</button>
      </Link>
    </div>

{/* {productDataState.filter(user=>user.username?user.username.includes(user1.userEmail) : null) */}
{productDataState.map((productDetails) => (
<div class="w-auto  max-w-xs bg-gray-50 hover:shadow-2xl inline-block m-2.5 mt-8">
    <a href="/">
        <img class="p-3 rounded-t-lg object-cover  h-48 w-96" src={productDetails.imgurl} alt="" />
        <span class="text-green-900 hover:text-yellow-500">{productDetails.title}</span>
        <br></br>
        <span>{productDetails.price}</span>
      
    </a>
    <div class="px-5">
      
        <div class="py-2 flex justify-between">
        <a href={`/sell/products/${productDetails._id}`} class="text-white  font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-red-700">EDIT</a>
        <button  value={productDetails._id} class="text-white   font-medium rounded-xm text-sm  px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-red-700"
         onClick={handleDelete}
         
        > DELETE </button>
        </div>
    </div>
</div>
))}


    </div>
    </div>
    
    </>
  )
}

export default SellProducts

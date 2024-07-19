import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import "./updateProduct.css"
import axios from "axios";
import Sidebar from '../../../components/Seller/Sidebar';
import Navbar from '../../../components/Navbar';
import { useParams } from 'react-router';

const UpdateProduct = () => {

const params = useParams();
  
// const[data1,setData1] =useState([]);

const [image, setImage ] = useState("");
const [ imgurl, setUrl ] = useState("");


const [data,setData] =useState({});

// get by id products 

useEffect(() => {
            const configuration = {
            method: "get",
            url: `http://localhost:5000/sell/products/${params.id}`,
          //   headers: { // Authorization: `Bearer ${token}`, //   },
             };
      
        axios(configuration)
        .then((result) => {
          setData(result.data.products);
        //   console.log(result.data.products.title);
        })
        .catch((error) => {
          error = new Error();
        });
    },[])

  
  console.log(data.title);


 //image part  
 const uploadImage = (e) => {
 e.preventDefault();
 const data1 = new FormData()
 data1.append("file", image)
 data1.append("upload_preset", "nuokfvkw")
 data1.append("cloud_name","dzgvbxjqd")
 fetch("  https://api.cloudinary.com/v1_1/dzgvbxjqd/image/upload",{
 method:"post",
 body: data1
 })
 .then(resp => resp.json())
 .then(data1 => {
 setUrl(data1.url)
 })
 .catch(err => console.log(err))
 }

    
   const handleChange= async(e)=>{
    setData({...data, [e.target.name]: e.target.value});
   }

//   console.log(data1);

  const handleClick=(e)=>{

    e.preventDefault();

  console.log(imgurl);

    const configuration = {
        method: "put",
        url: `http://localhost:5000/sell/products/${data._id}`,
        data: {
        ...data,
        imgurl:imgurl
        },
      };
  
      axios(configuration)
      
      .then((result) => { 
        
        console.log(result);
        
    
    })
    .catch((error) => {console.log(error.response.data.errors.pincode);})

     alert("Product Updated Succesfully");
  
  }


  return (
    <>
    <Navbar/>
    <br/>
    <div className="container"> 
    <Sidebar/> 
    <div className="newProduct"> 
      <h1 class="text-3xl">Update Product</h1>
      <form className="addProductForm">
        
         <div className="addProductItem">
          <label>Title</label>
          <input 
             name="title"type="text"value={data.title}required="true"onChange={handleChange} />
          </div> 
          
        <div className="addProductItem">
          <label>Description</label>
          <textarea
            name="description" type="text" required="true" value={data.description} rows="5" cols="49" onChange={handleChange}  />
        </div>

         <div className="addProductItem">
          <label>Price</label>
          <input  name="price"  type="number"  value={data.price}  required="true"  onChange={handleChange}/>
           </div>
           <div className="addProductItem"> 
           <label>Location</label>
          <input 
             name="location"type="text"value={data.location}required="true"onChange={handleChange} />
          </div> 
        <div className="addProductItem">
          <label>Pin Code</label>
            <input type="text"  name="pincode" value={data.pincode}required="true" onChange={handleChange} /> 
         </div>
         
         <div className="addProductItem">
          <label>Image</label>
          <input
            name="imgurl" type="file" id="file"
            onChange= {(e)=> setImage(e.target.files[0])} />
        <button onClick={uploadImage} >Upload image</button>
        </div>

       <button onClick={handleClick} className="addProductButton">
          Update
        </button>
   
     </form>
     </div>
      <img src={imgurl} alt=""/> 
    </div>
    </>
  );
}

export default UpdateProduct
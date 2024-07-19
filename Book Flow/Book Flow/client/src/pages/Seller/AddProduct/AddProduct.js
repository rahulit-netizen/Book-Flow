import { useState } from "react";

import "./addProduct.css";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Seller/Sidebar";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function AddProduct() {

  const token = cookies.get("TOKEN");
  const user1=jwtDecode(token);


const initial =
    {
        title:"",
        description:"",
        price:"",
        pincode:"",
      
    }   

const [image, setImage ] = useState("");
const [ imgurl, setUrl ] = useState("");
const [data,setData] =useState(initial);

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
   
  const handleClick=(e)=>{

    e.preventDefault();

     console.log(imgurl);

    const configuration = {
        method: "post",
        url: "http://localhost:5000/sell/products",
        data: {...data,
        imgurl:imgurl,
        sellerEmail:user1.userEmail,
        name:user1.name
       }
       };
  
      axios(configuration)
      
      .then((result) => { 
        console.log(result);
        alert("Product Added");
        })

    .catch((error) => {console.log(error.response.data.errors.pincode);
    
    alert("Try Again");
  })

    
  }


  return (
    <>
    
    <Navbar/>
    <br/>
    <div className="container"> 
    <Sidebar/> 
    <div className="newProduct"> 
      <h1 class="text-3xl"> Add Product</h1>
      <form className="addProductForm">
        
        <div className="addProductItem">
          <label>Title</label>
          <input class="input1" 
            name="title"
            type="text"
            placeholder="Apple Airpods"
            value={data.title}
            required="true"
            onChange={handleChange}
            // onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea class="input1"
            name="description"
            type="text"
            required="true"
            value={data.description}
            rows="5"
            cols="49"
            placeholder="Description..."
            onChange={handleChange}
            // onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input class="input1"
            name="price"
            type="number"
            value={data.price}
            required="true"
            placeholder="100"
            onChange={handleChange}
            // onChange={(e) => setprice(e.target.value)}
          />
        </div>
          <div className="addProductItem">
           <label>Location</label>
          <input class="input1"
             name="location"type="text"value={data.location}required="true"onChange={handleChange} />
          </div> 
        <div className="addProductItem">
          <label>Pin Code</label>
            <input class="input1" type="text" 
            name="pincode"
            value={data.pincode}
            placeholder="273001"
            required="true"
            onChange={handleChange} 
            // onChange={(e) => setpincode(e.target.value)}
            />

        </div>
        {/* <div className="addProductItem">
          <label>Stock</label>
        
            {/*<select name="inStock" >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div> */}

        <div className="addProductItem">
          <label>Image</label>
          <input class="input1" 
         
          name="imgurl"
          value={data.imgurl}
            type="file"
            id="file"
             onChange= {(e)=> setImage(e.target.files[0])}
             />
        <button onClick={uploadImage} >Upload image</button>
        </div>

       <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
      <img src={imgurl} alt=""/>
    </div>
    </div>
    </>
  );
}
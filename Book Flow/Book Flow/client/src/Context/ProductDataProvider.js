import React, { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ProductDataContext } from "./ProductDataContext";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const cookies =new Cookies();


export const ProductDataProvider = (props) => {
    const [productDataState, setProductDataState] = useState([]);


    const token = cookies.get("TOKEN");
    let user1;
      if(token)
     {
       user1=jwtDecode(token);
      }
   

    //  console.log(user1);
    // seller products
    const getAllProducts = function()
    {
      if(token)
      {
        const configuration = {
            method: "post",
            url: "http://localhost:5000/sell/products/1",
          //   headers: { // Authorization: `Bearer ${token}`, //   },
          data:{
          sellerEmail:user1.userEmail
          }
          };
      
         axios(configuration)
        .then((result) => {
         setProductDataState(result.data.products);
         })
        .catch((error) => {
          error = new Error();
        });
      }
    }
 useEffect(() => {
      //  console.log(productDataState);
      getAllProducts();
   },[productDataState]);




    return (
        <ProductDataContext.Provider value={[productDataState, setProductDataState]}>
            {props.children}
        </ProductDataContext.Provider>
    );
};
// import React from 'react'
// import { useEffect } from "react";
// import axios from "axios";
// import { useContext } from "react";
// import { ProductDataContext } from './Context/ProductData';
// // import jwtDecode from "jwt-decode";
// // import Cookies from "universal-cookie";

// // const cookies = new Cookies();


// const AppWrapper = (props) => {
//     // const token = cookies.get("TOKEN");
//     // const user1=jwtDecode(token);

//     const [productDataState,setProductDataState] = useContext(ProductDataContext)

//     const getAllProducts = function()
//     {
//         const configuration = {
//             method: "post",
//             url: "http://localhost:5000/sell/products/1",
//           //   headers: { // Authorization: `Bearer ${token}`, //   },
//           data:{
//             sellerEmail:user1.userEmail
//           }
//           };
      
//          axios(configuration)
//         .then((result) => {
//         //   console.log(result);
//           setProductDataState(result.data.products);
//          })
//         .catch((error) => {
//           error = new Error();
//         });
//     }



//     useEffect(() => {
//     getAllProducts()
//    },[productDataState]);
  
// //    console.log(productDataState);
  

//   return (
    
//     <>
//     <div>
//         {props.children}
//          {/* <button id="updateuser" className="hidden" onClick={() => getAllProducts()} /> */}
//          {/* <button id="updateroom" className="hidden" onClick={() => UpdateRoom()} />  */}
//     </div>
// </>
//   )
// }

// export default AppWrapper
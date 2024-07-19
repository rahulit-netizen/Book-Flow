import React from 'react'
import { Outlet} from 'react-router-dom';
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

// import { useState } from 'react';
// import axios from 'axios';
const cookies = new Cookies();

const ProtectedRoutes = () => {
  
    let isAuth= false;
    const token = cookies.get("TOKEN");
    
    if(token!=="undefined")
    {
       const user=jwtDecode(token);

       if(user && user.exp*1000>=Date.now())
        isAuth=true;
    }
    else isAuth=false;
    
      return (
        isAuth ? <Outlet/> :window.location.href = "/login"
  
       )
}

export default ProtectedRoutes
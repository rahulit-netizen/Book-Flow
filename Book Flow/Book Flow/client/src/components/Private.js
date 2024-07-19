import React from 'react'
import axios from "axios";
import Cookies from "universal-cookie";
import { Button } from "react-bootstrap";
import {useState,useEffect} from  'react';
const cookies = new Cookies();


const Private = () => {
  

    const token = cookies.get("TOKEN");
    const [message, setMessage] = useState("");

    useEffect(() => {
        // set configurations for the API call here
        const configuration = {
          method: "get",
          url: "http://localhost:5000/auth-endpoint",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };


       axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
        console.log(result);
      })
      .catch((error) => {
        error = new Error();
      });
     }, [token]);
     
    
     const logout = () => {
        // destroy the cookie
        cookies.remove("TOKEN", { path: "/" });
        // redirect user to the landing page
        window.location.href = "/login";
      }

  return (

    <div className="text-center">
      <h1>Auth Component</h1>

      {/* displaying our message from our API call */}
      <h3 className="text-danger">{message}</h3>

      {/* logout */}
      <Button type="submit" variant="danger" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
  
}

export default Private
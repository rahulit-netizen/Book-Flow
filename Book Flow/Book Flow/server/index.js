const express= require("express");
const mongoose=require("mongoose");
const bodyParser= require("body-parser");
const dbConnect=require("./connect");
const auth = require("./auth");

const app=express();

// require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connected mongodb;
dbConnect();

app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
      );
      next();
    });



app.use('/register', require('./register'));
app.use('/login', require('./login'));
app.use('/sell/products',require('./product'));
app.get("/auth-endpoint", auth, (request, response) => {
      response.json({ isAdmin:true, message: "You are authorized to access me" });
    });
// app.use('/sell/products',require)




    app.listen(5000,function()
    {
          console.log("server is running on port 5000");
    })



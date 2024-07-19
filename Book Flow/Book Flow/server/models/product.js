
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   
       sellerEmail: {
            type:String,
            required:true
       },

       name:{
        type:String,
        required:true
       },
        title : {
            type : String , 
            required : true
        } ,

        // category:
        // {
        //     type: String,
        //     required: true
        // },
        description : {
            type : String , 
            required : true
        } , 

        price: {
            type : Number , 
            required : true
        },
        location:{
            type:String,
            reuired:true
        },
        pincode : {
            type : Number , 
            required : true},
    
        imgurl: {
            type : String , 
            required : true
        } , 
      

    
}, {timestamps : true}

)
const products1 = mongoose.model('products' , productSchema)
module.exports = products1;

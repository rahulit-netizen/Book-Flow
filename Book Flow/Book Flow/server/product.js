var router = require('express').Router();
const Product = require("./models/product");
const Users = require("./models/users")

// get total products from all user and add new product

router.post("/", async(request, response) => {

const newProduct = new Product(request.body);
newProduct.save()
          
          .then((result) => {
            response.status(201).send({
              message: "Product Added Successfully",
              result,
              
            });

            Users.updateOne({email:result.sellerEmail},  {
                $push: {"products": result._id}
              }).then((result) => console.log(result))
           })
        
             .catch((error) => {
            response.status(500).send({
              message: "Error ",
              error,
            })
          });

  
})


  // UPDATE seller product

  router.put("/:id",  async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(
        {  message:"Product Updated",
            updatedProduct
        });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE seller product
  router.delete("/:id",  async (req, res) => {
    try {
     
      

      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");

      Users.updateOne({email:req.body.sellerEmail},  {
        $pull: {"products":req.params.id}
      }).then((result) => console.log(result))
  
    } catch (err) {
      res.status(500).json(err);
    }
  });

//get products seller page
  router.post("/1", async (req, res) => {
    
  try{
        const products= await Product.find({sellerEmail:req.body.sellerEmail});
        res.status(200).send({  
        message:"Fetched Products",
        products
    })
  
}
  catch(err)
  {
    res.status(500).json(err);
    console.log(err);
  }
    
}) 


 
  // get single product seller

  router.get("/:id", async (req, res) => {

     try{
     const products=  await Product.findById(req.params.id);

     res.status(201).send({
      message: "Fetched required product",
      products
        });

     }

       catch (err){
      res.status(500).json(err);
      console.log(err);
      }

  });




  //BUYER 

  router.post("/2", async (req, res) => {
    
    try{
          const products= await Product.find({sellerEmail:{$ne : req.body.sellerEmail}});
          res.status(200).send({  
          message:"Fetched Products",
          products
      })
    
  }
    catch(err)
    {
      res.status(500).json(err);
      console.log(err);
    }
      
  }) 



module.exports=router;
const jwt = require("jsonwebtoken");
var router = require('express').Router();
const bcrypt = require("bcrypt");
const User = require("./models/users");


router.post("/", async(request, response) => {
// check if email exists

await User.findOne({ email: request.body.email })

// if email exists
.then((user) => {
  // compare the password entered and the hashed password found
  bcrypt.compare(request.body.password, user.password)

    // if the passwords match
    .then((passwordCheck) => {

      // check if password matches
      if(!passwordCheck) {
        response.status(200).send({
          message: "Passwords does not match",
          error,
        });
      }
   

      //   create JWT token
      const token = jwt.sign(
        {
          name:user.name,
          userId: user._id,
          userEmail: user.email,
        },
        "RANDOM-TOKEN",
        { expiresIn: "24h" }
      );

      //   return success response
      response.status(200).send({
        message: "Login Successful",
        email: user.email,
        token,
      });
    })

    // catch error if password does not match
    .catch((error) => {
      response.status(200).send({
        message: "Passwords does not match",
        error,
      });
    });
})

// catch error if email does not exist
.catch((e) => {
 return response.status(200).send({
    message: "Email not found",
    e,
  });
});
});
  
 module.exports=router;
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name:{
		type: String,
		required: [true, "Please provide name"]
	},
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
      },
    
      password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
      }, 
	  
	  products: {
		type: [String],
		default: [],
	  },

    },
      {timestamps: true})
  
    const User = mongoose.model("User", UserSchema)

module.exports = User;
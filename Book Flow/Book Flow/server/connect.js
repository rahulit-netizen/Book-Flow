const mongoose=require("mongoose");



async function dbConnect() {

const URL="mongodb+srv://shivamgiri21:shivam218@cluster0.mdxfk4u.mongodb.net/?retryWrites=true&w=majority&ssl=true"

// use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose.connect(URL,{
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
  })


    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
    


}

module.exports = dbConnect;
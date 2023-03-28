const app = require("./app");
const connectWithdb = require("./config/db");
require("dotenv").config();
const cloudinary = require('cloudinary');

//connect with database
connectWithdb();

cloudinary.config({
  
  cloud_name: process.env.CLOUDNARY_NAME,
  
  api_key: process.env.CLOUDNARY_API_KEY,

  api_secret: process.env.CLOUDNARY_API_KEY_SECRET,
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

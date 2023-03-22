const User = require("../models/User");

const BigPromise = require("../middleware/bigPromise");
const CustomerError = require("../utils/customError");
const cookieToken = require("../utils/cookieToken");
const fileupload = require("express-fileupload");
const cloudinary = require("cloudinary");

exports.signup = BigPromise(async (req, res, next) => {
  let result;

  if (req.files) {
    let files = req.files.photo;
    result = await cloudinary.v2.uploader.upload(files, {
      folder: "users",
      width: 150,
      crop: "scale",
    });
  }

  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return next(
      new CustomerError("Name, Email and Password are required", 400)
    );
  }

  const user = await User.create({
    name,
    email,
    password,
    photo: {
      id: result.public_id,
      secure_url: result.secure_url,
    },
  });

  cookieToken(user, res);
});

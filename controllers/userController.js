const User = require("../models/User");

const BigPromise = require("../middleware/bigPromise");
const CustomerError = require("../utils/customError");
const cookieToken = require("../utils/cookieToken");

exports.signup = BigPromise(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return next(
      new CustomerError("Name, Email and Password are required", 400)
    );
  }

  const user = await User.create({ name, email, password });


   cookieToken();
});

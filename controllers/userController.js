const User = require('../models/User');

const BigPromise = require('../middleware/bigPromise');


exports.signup = BigPromise(async (req, res, next) => {
    res.send("signup_route")
})
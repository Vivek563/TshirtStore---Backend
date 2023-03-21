const bigPromise = require('../middleware/bigPromise');
const BigPromise = require('../middleware/bigPromise');




exports.home = bigPromise(async(req, res) => {
  // const db = await somethings()
  res.status(200).json({
    success: true,
    greeting: "Hello form Api",
  });
})


exports.homeDummy = async (req, res) => {

  try {
    // const db = await somethings()
    res.status(200).json({
      success: true,
      greeting: "This is another dummy route",
    });

  } catch (error) {
    console.log(error);
  }

  
};
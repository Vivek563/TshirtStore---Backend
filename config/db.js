const mongoose = require('mongoose')


const connectWithdb = () => {
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log(`DB connection established`))
    .catch(error => {
        console.log(`DB connection error: ${error}`);
        process.exit(1);
    })
}

module.exports = connectWithdb
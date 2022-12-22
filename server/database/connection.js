const mongoose = require('mongoose')
const connectToMongo = async () => {
    await mongoose.connect(process.env.mongouri, () => { console.log("connection is successfull") })
}
module.exports = connectToMongo;
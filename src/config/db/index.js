const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongodb connect sucessfully')
    } catch (error) {
        console.log('Mongodb connect failure')
    }

}

module.exports = {connect}

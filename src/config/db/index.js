const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://duyluu51:Anhvaem321@cluster0.eqcte.mongodb.net/wed_sale_product_dev?retryWrites=true&w=majority")
        console.log('Mongodb connect sucessfully')
    } catch (error) {
        console.log('Mongodb connect failure')
    }

}

module.exports = {connect}

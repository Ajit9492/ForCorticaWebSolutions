const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
        name:{
            type:String,
        },
       price:{
        type:String,
       },
       area:{
        type:String,
       },
       status:{
        type:String,
       },
    })
const Product = mongoose.model('Product', productSchema);

module.exports = Product;

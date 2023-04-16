//this model file will be imported to the controller to interact with a specific collection

const mongoose = require('mongoose');
 
const OneProduct = new mongoose.Schema({
    title: {
        type: String,
        required:[true, 'Title is required'],
        minLength:[3,'The title must be 3 or more characters'],
        maxLength:[50, 'The title is too long']
    },
    price: {
        type: Number,
        min: [2, 'Price is too low'],
        max: 50,
        required: [true, 'Price is required']

    },
    description: {
        type: String,
        required:[true, 'Description is required'],
        minLength:[3,'The description must be 3 or more characters'],
        maxLength:[50, 'The description is too long']
    }
    //add timestamps
}, {timestamps:true});
 
// creates model that we can interact with, model is created off the schema blueprint, which is above
const Product = mongoose.model('Product', OneProduct);
 
module.exports = Product;

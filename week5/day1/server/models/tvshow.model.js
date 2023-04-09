//this model file will be imported to the controller to interact with a specific collection

const mongoose = require('mongoose');
 
const TvShow = new mongoose.Schema({
    title: {
        type: String
    },
    releaseYear: {
        type: Number
    },
    network: {
        type: String
    },
    creator: {
        type: String
    },
    genre: {
        type: String
    }
});
 
// creates model that we can interact with, model is created off the schema blueprint, which is above
const Show = mongoose.model('Show', TvShow);
 
module.exports = Show;

//this model file will be imported to the controller to interact with a specific collection

const mongoose = require('mongoose');
 
const TvShow = new mongoose.Schema({
    title: {
        type: String,
        required:[true, 'Title is required'],
        minLength:[3,'The title must be 3 or more characters'],
        maxLength:[10, 'The title is too long']
    },
    releaseYear: {
        type: Number,
        min:[1920, 'No sows before 1920 allowed']
    },
    network: {
        type: String,
        required:[true, 'Network is required'],
        minLength:[3,'The network must be 3 or more characters'],
        maxLength:[10, 'The network is too long']
    },
    creator: {
        type: String,
        required:[true, 'Creator is required'],
        minLength:[3,'The creator must be 3 or more characters'],
        maxLength:[10, 'The creator is too long']
    },
    genre: {
        type: String,
        required:[true, 'Genre is required'],
        minLength:[3,'The genre must be 3 or more characters'],
        maxLength:[10, 'The genre is too long']
    }
});
 
// creates model that we can interact with, model is created off the schema blueprint, which is above
const Show = mongoose.model('Show', TvShow);
 
module.exports = Show;

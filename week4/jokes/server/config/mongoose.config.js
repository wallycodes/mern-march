//this file is conencted to the server.js file it is imported on line 4ish or 5
const mongoose = require('mongoose');

//only need to change the name of the database at the end of the URL, keep rest of code the same
mongoose.connect('mongodb://127.0.0.1:27017/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

const express = require("express");
const app = express();
    
require("./config/mongoose.config");// calling the mongooese.config file and running the connect function
    
app.use(express.json(), express.urlencoded({ extended: true })); //middleware for handling post request

//passing in app so we can, get, post, put, delete
const TvShowRoutes = require("./routes/tvshow.routes");
TvShowRoutes(app);

//listens on port 8000 runs server
app.listen(8000, () => console.log("The server is all fired up on port 8000"));

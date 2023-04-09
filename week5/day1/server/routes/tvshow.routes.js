const TvShowController = require('../controllers/tvshow.controller');

module.exports = app => {
    //this function is being sent to the sever.js file and being stored as a const TvShowRoutes
    app.get('/api/allShows', TvShowController.findAllShows);
    app.post('/api/newShow', TvShowController.createShow);
} 





const ProjectController = require('../controllers/product.controller');

module.exports = app => {
    //this function is being sent to the sever.js file and being stored as a const TvShowRoutes
    app.get('/api/allProducts', ProjectController.findAllProjects);
    app.post('/api/newProducts', ProjectController.createProjects);
    // app.get('/api/oneShow/:id', TvShowController.findOneShow);
    // app.put('/api/updateShow/:id', TvShowController.updateShow);
    // app.delete('/api/deleteShow/:id', TvShowController.deleteShow);
} 





const ProjectController = require('../controllers/project.controller');

module.exports = app => {
    //this function is being sent to the sever.js file and being stored as a const TvShowRoutes
    app.get('/api/allProjects', ProjectController.findAllProjects);
    app.post('/api/newProjects', ProjectController.createProjects);
    // app.get('/api/oneShow/:id', TvShowController.findOneShow);
    // app.put('/api/updateShow/:id', TvShowController.updateShow);
    // app.delete('/api/deleteShow/:id', TvShowController.deleteShow);
} 





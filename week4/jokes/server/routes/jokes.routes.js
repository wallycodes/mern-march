const JokeController = require('../controllers/jokes.controller')

module.exports = app =>{
    app.get('/api/getAllJokes', JokeController.getAllJokes);
    app.get('/api/getOneJoke', JokeController.getOneJoke);
    app.post('/api/createJoke', JokeController.createJoke);
    app.put('/api/updateJoke/:id', JokeController.updateJoke);
    app.delete('/api/deleteJoke/:id', JokeController.deleteJoke);
}
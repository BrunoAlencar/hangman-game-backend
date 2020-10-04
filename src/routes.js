const express = require('express');
const routes = express.Router();

const gameController = require('./controllers/GameController')

routes.post('/checkletter', gameController.checkLetter);
routes.get('/game-start', gameController.start);
routes.post('/game', gameController.create);
routes.get('/',  (req, res) => {
    res.send('Oi')
})

module.exports = routes;

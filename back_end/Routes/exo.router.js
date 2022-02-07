const express = require('express');
const exoRouter = express.Router();
const exoController = require('../Controllers/exo.contoller');

exoRouter.get('/exos', exoController.getAllExos);
exoRouter.get('/:id', exoController.getExo);
exoRouter.post('/exo', exoController.createExo);
exoRouter.put('/:id', exoController.editExo);
exoRouter.delete('/:id', exoController.deleteExo);

module.exports = exoRouter;
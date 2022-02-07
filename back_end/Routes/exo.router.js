const express = require('express');
const exoRouter = express.Router();
const exoController = require('../Controllers/exo.contoller');

router.get('/exos', exoController.getAllExos);
 router.get('/:id', exoController.getExo);
router.post('/exo', exoController.createExo);
router.put('/:id', exoController.editExo);
router.delete('/:id', exoController.deleteExo);

module.exports = exoRouter;
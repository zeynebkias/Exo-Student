const express = require('express');
const router = express.Router();
const exoController = require('../Controllers/exo.contoller');

router.get('/exos', exoController.getAllExos);
 router.get('/:title', exoController.getExo);
router.post('/exo', exoController.createExo);
router.put('/:title', exoController.editExo);
router.delete('/:id', exoController.deleteExo);

module.exports = router;
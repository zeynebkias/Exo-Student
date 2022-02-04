const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/student.contoller');

router.get('/students', studentController.getAllStudents);
 router.get('/:firtName', studentController.getStudent);
router.post('/student', studentController.createStudent);
router.put('/:firtName', studentController.editStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
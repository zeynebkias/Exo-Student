const express = require('express');
const studentRouter = express.Router();
const studentController = require('../Controllers/student.contoller');

router.get('/students', studentController.getAllStudents);
 router.get('/:id', studentController.getStudent);
router.post('/student', studentController.createStudent);
router.put('/:id', studentController.editStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = studentRouter;
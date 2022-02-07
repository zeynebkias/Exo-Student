const express = require('express');
const studentRouter = express.Router();
const studentController = require('../Controllers/student.contoller');

studentRouter.get('/students', studentController.getAllStudents);
studentRouter.get('/:id', studentController.getStudent);
studentRouter.post('/student', studentController.createStudent);
studentRouter.put('/:id', studentController.editStudent);
studentRouter.delete('/:id', studentController.deleteStudent);

module.exports = studentRouter;
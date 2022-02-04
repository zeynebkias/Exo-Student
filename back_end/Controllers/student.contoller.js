const Student = require("../Models/student.model");
const StudentController = {};


StudentController.createStudent = async function (req, res) {
  const actor = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName, 
    group : req.body.group,
    id : req.body.id,
  });
  try {
    await Student.save();
    res.status(201).json({
      message: "Student created successfully",
      actor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating student",
      error,
    });
  }
};


StudentController.getAllStudents = async function (req, res) {
  console.log("GET /students");
  let students;
  try {
    students = await Student.find(); // function find
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

StudentController.editStudent = async function (req, res) {
  let student;
  try { 
    student = await Student.findOneAndUpdate(
      {firstName : req.params.firstName},
      {$set : req.body},
      {new : true}
    );
    if (student){
      res.send(student);
    }else{
      res.status(404).send("Student not found")
    }
    
  }catch (error) {
    res.status(500).send(error)
  }

};

StudentController.deleteStudent = async function (req, res) {
  let student;
  try { 
    student = await Student.findOneAndDelete({id : req.params.id} )
    if (student) {
      res.status(200).send("Student deleted successfully");
    }else{
      res.status(404).send("Student not found")
    }
  }catch (error){
    res.status(500).send(error);
  }
};




StudentController.getStudent = async function (req, res) {
  console.log("GET /students/:id");
  let student;
  try {
     student = await Student.findOne({ firstName: req.params.firstName});
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = StudentController;
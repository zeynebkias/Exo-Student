const Exo = require("../Models/exo.model");
const Student = require("../Models/student.model");
const exoController = {};


exoController.createExo = async function (req, res) {
  const {title, description, duration, level, students} = req.body;

  const exo = new Exo ({
    title,
    description, 
    duration,
    level,
    students
});
  try {
    await exo.save();
    res.status(201).json({
      message: "exo created successfully",
      exo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating exercice",
      error,
    });
  }
};


exoController.getAllExos = async function (req, res) {
  // console.log("GET /getAllExos");
  let exos;
  try {
    exos = await exos.find(); // function find
    res.send(exos);
  } catch (error) {
    res.status(500).send(error);
  }
};

exoController.getExo = async function (req, res) {
  console.log("GET /getExo/:id");
  let exo;
  try {
    exo = await exo.findOne({ guid :req.params.guid});
    res.send(exo);
  } catch (error) {
    res.status(500).send(error);
  }
};

exoController.editExo = async function (req, res) {
  console.log("GET /editExo/:id");

  let exo;
  try { 
    exo = await exo.findOneAndUpdate(
      {guid : req.params.guid},
      {$set : req.body},
      {new : true}
    );
    if (exo){
      res.send(exo);
    }else{
      res.status(404).send("exo not found")
    }
    
  }catch (error) {
    res.status(500).send(error)
  }

};

exoController.deleteExo = async function (req, res) {
  console.log("GET /deleteExo/:id");

  let exo;
  try { 
    exo = await exo.findOneAndDelete({guid : req.params.guid} )
    if (exo) {
      res.status(200).send("exo deleted successfully");
    }else{
      res.status(404).send("exo not found")
    }
  }catch (error){
    res.status(500).send(error);
  }
};


module.exports = exoController;
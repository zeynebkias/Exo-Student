const Exo = require("../Models/exo.model");
const exoController = {};


exoController.createExo = async function (req, res) {
  const exo = new Exo ({
    guid : req.params.guid,
    title: req.body.title,
    description: req.body.description, 
    duration : req.body.duration,
    date : req.body.date,
    level : req.body.level,
  });
  try {
    await exo.save();
    res.status(201).json({
      message: "exo created successfully",
      exo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating exo",
      error,
    });
  }
};


exoController.getAllExos = async function (req, res) {
  console.log("GET /exos");
  let exos;
  try {
    exos = await exos.find(); // function find
    res.send(exos);
  } catch (error) {
    res.status(500).send(error);
  }
};

exoController.editExo = async function (req, res) {
  let exo;
  try { 
    exo = await exo.findOneAndUpdate(
      {title : req.params.title},
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
  let exo;
  try { 
    exo = await exo.findOneAndDelete({id : req.params.id} )
    if (exo) {
      res.status(200).send("exo deleted successfully");
    }else{
      res.status(404).send("exo not found")
    }
  }catch (error){
    res.status(500).send(error);
  }
};




exoController.getExo = async function (req, res) {
  console.log("GET /Exos/:id");
  let exo;
  try {
    exo = await exo.findOne({ title :req.params.title});
    res.send(exo);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = exoController;
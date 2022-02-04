const express = require("express");
const app = express();
const mongoose = require("mongoose");

const exoRouter = require("./Routes/exo.router");
const studentRouter = require("./Routes/student.router");

require("dotenv").config();

const Port = process.env.PORT || 4000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server Connected on Port 5000");
});

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  db.on("open", () => {
    console.log("connected to database MongoDb");
  });
  
  app.use('/', exoRouter);
  app.use('/', studentRouter);

  
  
  app.listen(Port, () => console.log(`Server connected on port ${Port}`));
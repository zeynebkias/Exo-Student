// create user schema using mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exoSchema = new Schema({
  // id : Number,
  guid:Number,
  title: {
        type: String,
        required: true,
},
    description: String, 
    Date: Date,
    duration: Number,
    level: String,
    students: [
      {
        firstName: String,
        lastName: String,
        group: String 
      
      }]
});

module.exports = mongoose.model("exo", exoSchema);
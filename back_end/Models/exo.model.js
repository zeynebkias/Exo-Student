// create user schema using mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exoSchema = new Schema({
  title: {
        type: String,
        required: true,
},
    description: String, 
    duration: Number,
    created_at :{
      type : Date,
      default : Date.now
  },
  updated_at: {
      type : Date,
      default : Date.now
  },
    students: [
      {
        type : Schema.Types.ObjectId, ref : "student" 
      
      }]
});

module.exports = mongoose.model("exo", exoSchema);
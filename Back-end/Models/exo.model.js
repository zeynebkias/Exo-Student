// create user schema using mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exoSchema = new Schema({
  id : Number,
  guid:Number,
  title: {
        type: String,
        required: true,
},
    description: String, 
    date: Date,
    duration: Number,
    level: String,
    students: [{type: Schema.Types.ObjectId, ref: "Student"}]
});

module.exports = mongoose.model("exo", exoSchema);
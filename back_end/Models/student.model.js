// create user schema using mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: String,
    lastName: String,
    group: String,

    exos: [{   
        guid: Number,
        title: String,           
        description: String,
        Date: Date,
        duration: Number,
        level: String 
    }]

});

module.exports = mongoose.model("student", studentSchema);
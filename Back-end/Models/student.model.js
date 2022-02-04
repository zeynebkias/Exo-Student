// create user schema using mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: String,
    lastName: String,
    group: String
});

module.exports = mongoose.model("student", studentSchema);
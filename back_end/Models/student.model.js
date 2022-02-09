// create user schema using mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    FirstName: String,
    LastName: String,
    Group: Number,
    Email: String,
    created_at :{
        type : Date,
        default : Date.now
    },
    updated_at: {
        type : Date,
        default : Date.now
    }

});

module.exports = mongoose.model("student", studentSchema);
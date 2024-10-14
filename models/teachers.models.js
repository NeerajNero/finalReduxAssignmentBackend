const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true,
    },
    gender: {
        type: String,
        require: true,
        enum: ["male","female","others","Male","Female","Others"]
    },
    rating: {
        type: Number,
        require: true
    },
    experience: {
        type: Number,
        require: true
    }
})

const Teachers = new mongoose.model("Teachers", teacherSchema);
module.exports = {Teachers};
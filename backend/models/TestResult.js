const mongoose = require("mongoose")

const testScoreSchema = new mongoose.Schema({
    test: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "question"
    },
    totalMarks: {
        type: Number,
        required: true
    },
    obtainMarks: {
        type: Number,
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "student"
    },

})
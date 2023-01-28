const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "student",
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "subject",
  },
  scoredMarks: {
    type: Number,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  exam: {
    type: String,
    enum: ["Semester", "Mid Term", "Term Test", "Retest", "MCQ"],
    required: true
  },
  test: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "test"
  },
  occuredOn: {
    type: Date,
    required: true
  }
}, { timestamps: true });

const Score = mongoose.model("score", scoreSchema);
module.exports = { Score };

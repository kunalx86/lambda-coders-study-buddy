const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  questions: [{
    question: String,
    correctAnswer: String,
    options: [String]
  }],
  class: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "class"
  },
  occuredOn: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    enum: ["Academic", "Emotional"]
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "subject"
  },
}, { timestamps: true });

const Test = mongoose.model("test", testSchema);
module.exports = Test;
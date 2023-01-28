const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true
  }],
  correctOption: {
    type: String,
    required: false
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

export const Question = mongoose.model("question", questionSchema);
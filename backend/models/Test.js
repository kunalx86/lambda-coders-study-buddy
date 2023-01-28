const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "question"
  }],
  class: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "class"
  },
  occuredOn: {
    type: Date,
    required: true
  }
}, { timestamps: true });

export const Test = mongoose.model("test", testSchema);
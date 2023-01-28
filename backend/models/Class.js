const mongoose = require("mongoose");

// 1st - 10th
const classSchema = new mongoose.Schema({
  grade: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  classTeacher: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "teacher"
  },
  joiningCode: {
    type: String,
    required: true
  },
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "subject"
  }]
}, { timestamps: true });

const Class = mongoose.model("class", classSchema);
module.exports = { Class };
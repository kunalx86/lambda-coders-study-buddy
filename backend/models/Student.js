const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  rollno: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "organization"
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "class"
  },
  isApproved: {
    type: Boolean,
    required: true,
    default: false
  },
  resetVerified: {
    type: Boolean,
    required: false
  },
}, { timestamps: true });

const Student = mongoose.model("student", studentSchema);
module.exports = { Student };
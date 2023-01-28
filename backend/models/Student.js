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
  password: {
    type: String,
    required: true
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
  interests: [{
    type: String,
    required: true
  }]
}, { timestamps: true });

export const Student = mongoose.model("student", studentSchema);
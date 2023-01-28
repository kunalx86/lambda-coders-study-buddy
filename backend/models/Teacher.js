const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
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
  resetVerified: {
    type: Boolean,
    required: false
  },
}, { timestamps: true });

const Teacher = mongoose.model("teacher", teacherSchema);
module.exports = { Teacher };
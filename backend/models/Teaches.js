const mongoose = require("mongoose");

const teachesSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "teacher"
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "class"
  },
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "subject"
  }]
}, { timestamps: true });

const Teaches = mongoose.model("teaches", teachesSchema);
module.exports = { Teaches };
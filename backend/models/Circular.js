const mongoose = require("mongoose");

const circularSchema = new mongoose.Schema({
  classes: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "class"
  }], // [] == For everyone
  title: {
    type: String,
    required: true
  },
  document: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Circular = mongoose.model("circular", circularSchema);
module.exports = { Circular };
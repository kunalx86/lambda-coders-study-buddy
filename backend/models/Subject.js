const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  classes: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "class"
  }]
}, { timestamps: true });

export const Subject = mongoose.model("subject", subjectSchema);
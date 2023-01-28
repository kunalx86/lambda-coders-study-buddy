const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  documentName: {
    type: String,
    required: true
  },
  document: {
    type: String,
    required: true
  }
});

const studentDataSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "student"
  },
  data: [{
    type: DataSchema
  }]
}, { timestamps: true });

const StudentData = mongoose.model("studentdata", studentDataSchema);
module.exports = { StudentData };
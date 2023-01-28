const mongoose = require("mongoose");

const timeSchema = new mongoose.Schema({
  hours: {
    type: Number,
    required: true,
    min: 0,
    max: 23
  },
  minutes: {
    type: Number,
    required: true,
    min: 0,
    max: 59
  },
  seconds: {
    type: Number,
    required: true,
    min: 0,
    max: 59
  },
});

const timeTableSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "subject",
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "class",
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "teacher",
  },
  room: {
    type: String,
    required: true,
  },
  startTime: timeSchema,
  endTime: timeSchema,
  day: {
    type: String,
    required: true,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
}, { timestamps: true });

export const TimeTable = mongoose.model("timetable", timeTableSchema);

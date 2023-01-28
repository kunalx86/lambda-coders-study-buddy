const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "student"
  }],
  moderators: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "student"
  }],
  tags: [{
    type: String,
    required: true
  }]
}, { timestamps: true });

export const Community = mongoose.model("community", communitySchema);
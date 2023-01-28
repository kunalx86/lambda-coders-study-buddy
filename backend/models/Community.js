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
  tag: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Community = mongoose.model("community", communitySchema);
module.exports = { Community };
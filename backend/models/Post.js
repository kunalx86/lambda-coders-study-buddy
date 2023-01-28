const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
  },
  emoji: {
    type: "string",
    required: true,
    default: "👍"
  }
}, { timestamps: true });

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "community"
  },
  reactions: [{
    type: reactionSchema,
    required: true
  }]
}, { timestamps: true });

export const Post = mongoose.model("post", postSchema);
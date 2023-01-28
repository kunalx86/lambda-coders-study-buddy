const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
  score: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "score"
  }
}, { timestamps: true });

export const Recommendation = mongoose.model("recommendation", recommendationSchema);
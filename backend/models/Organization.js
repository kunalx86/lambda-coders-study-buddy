const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
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
  isVerified: {
    type: Boolean,
    required: true,
    default: false
  },
  resetVerified: {
    type: Boolean,
    required: false
  },
  emailDomain: [{
    type: String,
    required: false
  }],
}, { timestamps: true });

const Organization = mongoose.model("organization", organizationSchema);
module.exports = { Organization };
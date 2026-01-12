const mongoose = require("mongoose");

const loginAttemptSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    ipAddress: {
      type: String,
    },
    success: {
      type: Boolean,
      default: false,
    },
    userAgent: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("LoginAttempt", loginAttemptSchema);
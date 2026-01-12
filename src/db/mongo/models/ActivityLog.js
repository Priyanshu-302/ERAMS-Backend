const mongoose = require("mongoose");

const activityLogSchema = new mongoose.Schema(
  {
    userId: { type: String },
    action: { type: String, required: true },
    organizationId: { type: String },
    payload: { type: Object },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ActivityLog", activityLogSchema);
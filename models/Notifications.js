const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
    file: {
      type: String,
    },
    fileName: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);

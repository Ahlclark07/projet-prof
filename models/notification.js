const mongoose = require("mongoose");
// const { DateTime } = require("luxon");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  type: { type: String, enum: ["retrait", "video"], required: true },
  object: {
    type: Schema.Types.ObjectId,
    ref: this.type == "retrait" ? "Retraits" : "Videos",
  },
});

const notificationModel = mongoose.model("notifications", notificationSchema);

module.exports = notificationModel;

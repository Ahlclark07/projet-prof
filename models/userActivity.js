const mongoose = require("mongoose");
// const { DateTime } = require("luxon");
const Schema = mongoose.Schema;

const userActivitySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  video: { type: Schema.Types.ObjectId, ref: "Videos", required: true },
  watch: { type: Boolean, required: true, default: false },
  like: { type: Boolean, required: true, default: false },
  comment: { type: Boolean, required: true, default: false },
});

const userActivityModel = mongoose.model("userActivities", userActivitySchema);

module.exports = userActivityModel;

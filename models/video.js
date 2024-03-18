const mongoose = require("mongoose");
// const { DateTime } = require("luxon");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  nom: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, required: true, default: Date.n },
  remuneration: { type: Number, required: true, default: 5 },
});

const videoModel = mongoose.model("videos", videoSchema);

module.exports = videoModel;

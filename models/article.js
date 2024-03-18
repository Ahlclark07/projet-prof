const mongoose = require("mongoose");
// const { DateTime } = require("luxon");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  date_de_debut: { type: Date, default: Date.now() },
  date_de_fin: { type: Date, required: true },
  url: { type: String, required: true },
});

const articleModel = mongoose.model("articles", articleSchema);

module.exports = articleModel;

const mongoose = require("mongoose");
// const { DateTime } = require("luxon");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  notificationLue: { type: Array, required: true },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

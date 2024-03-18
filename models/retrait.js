const mongoose = require("mongoose");
// const { DateTime } = require("luxon");
const Schema = mongoose.Schema;

const retraitSchema = new Schema({
  auteur: { type: Schema.Types.ObjectId, ref: "User", required: true },
  montant: { type: Number, required: true },
  date: { type: Date, default: Date.n, required: true },
  statut: {
    type: "String",
    enum: ["Validé", "En attente", "Annulé"],
    default: "En attente",
    required: true,
  },
});

const retraitModel = mongoose.model("retraits", retraitSchema);

module.exports = retraitModel;

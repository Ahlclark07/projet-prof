const mongoose = require("mongoose");
// const { DateTime } = require("luxon");
const Schema = mongoose.Schema;

const portefeuilleSchema = new Schema({
  montant: { type: Number, required: true },
});

const portefeuilleModel = mongoose.model("portefeuilles", portefeuilleSchema);

module.exports = portefeuilleModel;

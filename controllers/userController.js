const asyncHandler = require("express-async-handler");
const Retrait = require("../models/retrait");
const User = require("../models/user");
const Portefeuille = require("../models/portefeuille");

/* TODO
  Supprimer la fonction creerUser et mettre en place la fonction connexion avec Google comme sur la doc

 */
exports.creerUser = asyncHandler(async function (req, res, next) {
  const portefeuille = await Portefeuille.create({
    montant: 0,
  });
  const user = await User.create({
    nom: "nom_test",
    prenom: "prenom_test",
    email: "ahmalbilal@gmail.com",
    portefeuille: portefeuille._id,
  });

  res.send(
    "User : " + user.nom + " avec le portefeuille à l'id : " + portefeuille._id
  );
});
exports.supprimerUser = asyncHandler(function (req, res, next) {
  res.send("Not implemented");
});
exports.updateUser = asyncHandler(function (req, res, next) {
  res.send("NOT implemented");
});
exports.makeRetrait = asyncHandler(function (req, res, next) {
  res.send("NOT implemented");
});

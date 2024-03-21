const asyncHandler = require("express-async-handler");
const Retrait = require("../models/retrait");
const User = require("../models/user");
const Portefeuille = require("../models/portefeuille");

/* TODO
  Supprimer la fonction creerUser et mettre en place la fonction connexion avec Google comme sur la doc

 */
// authentification
exports.afficherFormulaireConnexion = function (req, res, next) {
  res.send("NOT Implemented");
};
exports.afficherFormulaireInscription = function (req, res, next) {
  res.send("NOT Implemented");
};
exports.inscription = asyncHandler(async function (req, res, next) {
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

<<<<<<< HEAD
=======
exports.connexion = passport.authenticate("local", {
  successReturnToOrRedirect: "/",
  failureRedirect: "/page_connexion",
  failureMessage: true,
});

exports.deconnexion = function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
>>>>>>> cbb7c96ca16181c547a7f221f1cc4c4232db949e

exports.makeRetrait = asyncHandler(function (req, res, next) {
  const montant = req.body.montant;
  res.send("NOT implemented");
});

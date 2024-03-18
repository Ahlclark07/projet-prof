const asyncHandler = require("express-async-handler");
const Admin = require("../models/admin");
const passport = require("../auth/localAuth");

//auth
exports.connexion = passport.authenticate("local", {
  successReturnToOrRedirect: "/",
  failureRedirect: "/login",
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

// videos
exports.getVideos = function (req, res, next) {
  res.send("NOT IMPLEMENTED: All Video GET");
};
exports.afficherFormulaireVideo = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Form to add video");
};
exports.ajouterVideo = function (req, res, next) {
  res.send("NOT IMPLEMENTED: ajouter video");
};
exports.supprimerVideo = function (req, res, next) {
  res.send("NOT IMPLEMENTED: supprimer video");
};
// clients

exports.getClients = function (req, res, next) {
  res.send("NOT IMPLEMENTED: All Client GET");
};
exports.activerClient = function (req, res, next) {
  res.send("NOT IMPLEMENTED: activer Client GET");
};
exports.desactiverClient = function (req, res, next) {
  res.send("NOT IMPLEMENTED: desactiver Client GET");
};
// articles

exports.getArticles = function (req, res, next) {
  res.send("NOT IMPLEMENTED: All articles GET");
};
exports.afficherFormulaireArticle = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Form to add articles");
};
exports.ajouterArticle = function (req, res, next) {
  res.send("NOT IMPLEMENTED: ajouter articles");
};
exports.supprimerArticle = function (req, res, next) {
  res.send("NOT IMPLEMENTED: supprimer articles");
};

//retraits

exports.getRetraits = function (req, res, next) {
  res.send("NOT IMPLEMENTED: All retraits GET");
};
exports.validerRetrait = function (req, res, next) {
  res.send("NOT IMPLEMENTED: ajouter retrait");
};
exports.annulerRetrait = function (req, res, next) {
  res.send("NOT IMPLEMENTED: supprimer retrait");
};

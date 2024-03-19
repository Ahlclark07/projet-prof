"use strict";
const asyncHandler = require("express-async-handler");
const Admin = require("../models/admin");
const Retrait = require("../models/retrait");
const Article = require("../models/article");
const Video = require("../models/video");
const User = require("../models/user");
const passport = require("../auth/localAuth");
const { render } = require("../app");

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
exports.getVideos = asyncHandler(async function (req, res, next) {
  const video = await Video.find().exec();
  res.json(video);
});
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

exports.getClients = asyncHandler(async function (req, res, next) {
  const clients = await User.find().exec();
  res.json(clients);
});
exports.activerClient = function (req, res, next) {
  res.send("NOT IMPLEMENTED: activer Client GET");
};
exports.desactiverClient = function (req, res, next) {
  res.send("NOT IMPLEMENTED: desactiver Client GET");
};
// articles

exports.getArticles = asyncHandler(async function (req, res, next) {
  const articles = await Article.find().exec();
  res.json(articles);
});
exports.afficherFormulaireArticle = function (req, res, next) {
  res.render("index", {
    title: "Un titre ou bien ?",
  });
};
exports.ajouterArticle = function (req, res, next) {
  res.send("NOT IMPLEMENTED: ajouter articles");
};
exports.supprimerArticle = function (req, res, next) {
  res.send("NOT IMPLEMENTED: supprimer articles");
};

//retraits

exports.getRetraits = asyncHandler(async function (req, res, next) {
  const retraits = await Retrait.find().exec();
  res.json(retraits);
});
exports.validerRetrait = function (req, res, next) {
  res.send("NOT IMPLEMENTED: ajouter retrait");
};
exports.annulerRetrait = function (req, res, next) {
  res.send("NOT IMPLEMENTED: supprimer retrait");
};

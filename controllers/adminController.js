"use strict";
const asyncHandler = require("express-async-handler");
const Admin = require("../models/admin");
const Retrait = require("../models/retrait");
const Article = require("../models/article");
const Video = require("../models/video");
const User = require("../models/user");
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
exports.getVideos = asyncHandler(async function (req, res, next) {
  const video = await Video.find().exec();
  res.json(video);
});

exports.afficherFormulaireVideo = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Form to add video");
};

exports.ajouterVideo = function (req, res, next) {
  const video = new Video({
    nom: req.body.nom,
    url: req.body.url,
    remuneration: req.body.remuneration,
  });
  
  video.save((err, savedVideo)=>{
    if(err){
      return res.status(500).send("Erreur lors de l'enregistrement de la vidéo")
    }
    res.status(201).json(savedVideo)
  });
};

exports.supprimerVideo = function (req, res, next) {
  Video.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Vidéo supprimée !'}))
      .catch(error => res.status(400).json({ error }));
};
// clients

exports.getClients = asyncHandler(async function (req, res, next) {
  const clients = await User.find().exec();
  res.json(clients);
});
exports.activerClient = function (req, res, next) {
  const client = User.findOneAndUpdate({ _id: req.params.id }, { actif: true });
  res.json(client);
};
exports.desactiverClient = function (req, res, next) {
  const client = User.findOneAndUpdate({ _id: req.params.id }, { actif: true });
  res.json(client);
};
// articles

exports.getArticles = asyncHandler(async function (req, res, next) {
  const articles = await Article.find().exec();
  res.json(articles);
});

exports.afficherFormulaireArticle = function (req, res, next) {
  res.render("formulaireArticle", {
    title: "Un titre ou bien ?",
  });
};

exports.ajouterArticle = asyncHandler(async function (req, res, next) {
  const article = await Article.create({
    ...req.body,
    image_url: req.file.filename,
  });
  res.json(article);
});

exports.supprimerArticle = asyncHandler(async function (req, res, next) {
  const article = await Article.findOneAndDelete({ _id: req.params.id });
  res.send("success");
});

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

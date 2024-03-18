const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

//authentification
router.post("/connexion", adminController.connexion);
router.post("/deconnexion", adminController.deconnexion);

//Clients
router.get("/clients", adminController.getClients);

//Vidéos
router.get("/videos", adminController.getVideos);
router.get("/formulairevideo", adminController.connexion);
router.post("/ajoutervideo", adminController.connexion);
router.get("/supprimervideo/{id}", adminController.connexion);

//articles
router.get("/articles", adminController.getArticles);
router.get("/formulairearticle", adminController.connexion);
router.post("/ajouterarticle", adminController.connexion);
router.get("/supprimerarticle/{id}", adminController.connexion);

//retraits
router.get("/retraits", adminController.getRetraits);
router.get("/validerRetrait/{id}", adminController.connexion);
router.get("/annulerRetrait/{id}", adminController.connexion);

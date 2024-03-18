const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

//authentification
router.post("/connexion", adminController.connexion);
router.post("/deconnexion", adminController.deconnexion);

//Clients
router.get("/clients", adminController.getClients);
router.post("/activerclient/{id}", adminController.activerClient);
router.get("/desactiverclient/{id}", adminController.desactiverClient);

//Vidéos
router.get("/videos", adminController.getVideos);
router.get("/formulairevideo", adminController.afficherFormulaireVideo);
router.post("/ajoutervideo", adminController.ajoutervideo);
router.get("/supprimervideo/{id}", adminController.supprimervideo);

//articles
router.get("/articles", adminController.getArticles);
router.get("/formulairearticle", adminController.afficherFormulaireArticle);
router.post("/ajouterarticle", adminController.ajouterArticle);
router.get("/supprimerarticle/{id}", adminController.supprimerArticle);

//retraits
router.get("/retraits", adminController.getRetraits);
router.get("/validerRetrait/{id}", adminController.validerRetrait);
router.get("/annulerRetrait/{id}", adminController.annulerRetrait);

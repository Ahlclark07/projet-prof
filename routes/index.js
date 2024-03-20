const express = require("express");
const router = express.Router();
const passport = require("../auth/localAuthUser");
const userController = require("../controllers/userController");

router.get("/", function (req, res, next) {
  res.send("Page d'accueil");
});
//Authentification
router.get("/page_connexion", userController.afficherFormulaireConnexion);
router.get("/page_inscription", userController.afficherFormulaireInscription);
router.post("/connexion", userController.connexion);
router.post("/inscription", userController.inscription);
router.post("/deconnexion", userController.deconnexion);

//actions
router.post("/initier_retrait", userController.makeRetrait);
module.exports = router;

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

//

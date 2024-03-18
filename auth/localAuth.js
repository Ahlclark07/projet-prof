const Admin = require("../models/admin");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // Champ dans le formulaire de connexion correspondant à l'email
      passwordField: "password", // Champ dans le formulaire de connexion correspondant au mot de passe
    },
    asyncHandler(async (email, password, done) => {
      try {
        // Recherchez l'utilisateur dans la base de données par son email
        const admin = await Admin.findOne({ email });

        // Si l'utilisateur n'existe pas, ou si le mot de passe est incorrect, retournez une erreur
        if (!admin || !admin.comparePassword(password)) {
          return done(null, false, {
            message: "Email ou mot de passe incorrect",
          });
        }

        // Si l'utilisateur existe et que le mot de passe est correct, retournez l'utilisateur
        return done(null, admin);
      } catch (error) {
        return done(error);
      }
    })
  )
);

// Sérialisation et désérialisation de l'utilisateur
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;

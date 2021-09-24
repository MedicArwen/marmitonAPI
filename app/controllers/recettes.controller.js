const db = require("../models");
const Recette = db.recette;

// retourner toutes les recttes
exports.recettes = (req, res) => {
  Recette.findAll().then(
    recettes => {
      res.status(200).send(recettes);
    }
  )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
//retourner une recette
exports.recette = (req, res) => {
  res.status(200).send("Admin Content.");
};
// créer les recettes
exports.createRecette = (req, res) => {
  res.status(200).send("User Content.");
};



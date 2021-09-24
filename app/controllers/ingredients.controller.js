const db = require("../models");
const Ingredient = db.ingredient;

// retourner toutes les ingredients
exports.ingredients = (req, res) => {
  Ingredient.findAll().then(
    ingredients => {
      res.status(200).send(ingredients);
    }
  )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
//retourner un ingredient
exports.ingredient = (req, res) => {
  res.status(200).send("Admin Content.");
};
// créer les recettes
exports.createIngredient = (req, res) => {
  res.status(200).send("User Content.");
};



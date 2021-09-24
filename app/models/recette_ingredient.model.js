module.exports = (sequelize, Sequelize) => {
    const RecetteIngredient = sequelize.define("recette_ingredients", {
      quantite: {
        type: Sequelize.FLOAT
      },
      unite: {
        type: Sequelize.STRING
      }
    });
  
    return RecetteIngredient;
  };
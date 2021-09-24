module.exports = (sequelize, Sequelize) => {
    const Ingredient = sequelize.define("ingredients", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      intitule: {
        type: Sequelize.STRING
      }
    });
  
    return Ingredient;
  };
module.exports = (sequelize, Sequelize) => {
    const Recette = sequelize.define("recettes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      titre: {
        type: Sequelize.STRING
      },
      resume: {
        type: Sequelize.STRING
      }
    });
  
    return Recette;
  };
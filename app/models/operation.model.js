module.exports = (sequelize, Sequelize) => {
    const Operation = sequelize.define("operations", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return Operation;
  };
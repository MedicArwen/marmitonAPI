const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.recette = require("../models/recette.model.js")(sequelize, Sequelize);
db.ingredient = require("../models/ingredient.model.js")(sequelize, Sequelize);
db.recette_ingredient = require("../models/recette_ingredient.model.js")(sequelize, Sequelize);
db.operation = require("../models/operation.model.js")(sequelize, Sequelize);




db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
// relation 1-N
db.user.hasMany(db.recette);
db.recette.belongsTo(db.user);
// relation 1-N
db.recette.hasMany(db.recette_ingredient);
db.recette_ingredient.belongsTo(db.recette)
// relation 1-N
db.ingredient.hasMany(db.recette_ingredient);
db.recette_ingredient.belongsTo(db.ingredient)

// relation 1-N
db.recette.hasMany(db.operation);
db.operation.belongsTo(db.recette)

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
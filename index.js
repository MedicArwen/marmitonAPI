const express = require("express");
const cors = require("cors");
const app = express();

/**MIDDLE WARE */
var corsOptions = {
    origin: "*"
  };
app.use(cors(corsOptions));
// parser les requêtes: content-type - application/json
app.use(express.json());
// parser les requêtes: content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// lien avec la base de données
const db = require("./app/models");
db.sequelize.sync();
// Route par défaut
app.get("/", (req, res) => {
  res.json({ message: "Welcome on marmitonAPI!" });
});
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/recette.routes')(app);
// Configuration du port et lancement du serveur
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
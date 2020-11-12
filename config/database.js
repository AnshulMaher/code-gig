const { Sequelize } = require("sequelize");

module.exports = new Sequelize("codegig", "postgres", "password78", {
  host: "localhost",
  dialect: "postgres"
});

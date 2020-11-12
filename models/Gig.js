const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Gig = db.define("gig", {
  title: {
    type: DataTypes.STRING
  },
  technologies: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  budget: {
    type: DataTypes.STRING
  },
  contact_email: {
    type: DataTypes.STRING
  }
});

Gig.sync().then(() => {
  console.log("table created");
});
module.exports = Gig;

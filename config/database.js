// import sequelize
const Sequelize = require("sequelize");

// create connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("../api/models/user.model")(sequelize, Sequelize);

module.exports = db;

// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var mysql = require("mysql");

// Creates mySQL connection using Sequelize

if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL, {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
} else {
var sequelize = new Sequelize("burger_db", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
}
// Exports the connection for other files to use
module.exports = sequelize;

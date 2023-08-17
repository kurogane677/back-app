"use strict";
const { Model, DataTypes, Sequelize } = require("sequelize");
const path = require("path").resolve("./");
const config = require(`${path}/config/config`);
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    timezone: config.development.timezone,
  }
);
// class User extends Model {
/**
 * Helper method for defining associations.
 * This method is not a part of Sequelize lifecycle.
 * The `models/index` file will call this method automatically.
 */
// static associate(models) {
//   // define association here
// }
const User = sequelize.define("User", {
  username: { type: DataTypes.STRING },
  password: { type: DataTypes.TEXT },
  access: { type: DataTypes.STRING },
});
// }

module.exports = User;

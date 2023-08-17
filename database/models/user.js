"use strict";
const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});
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

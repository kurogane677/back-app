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

const Item = sequelize.define("item", {
  item_code: { type: DataTypes.STRING },
  item_name: { type: DataTypes.STRING },
  item_price: { type: DataTypes.DOUBLE },
  item_stock: { type: DataTypes.INTEGER },
});

module.exports = Item;

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

const ItemStrgDtl = sequelize.define("item_strg_dtl", {
  item_code: { type: DataTypes.STRING },
  item_name: { type: DataTypes.STRING },
  item_qty: { type: DataTypes.INTEGER },
  item_shelf: { type: DataTypes.STRING },
  createdBy: { type: DataTypes.STRING },
  updatedBy: { type: DataTypes.STRING },
});

module.exports = ItemStrgDtl;

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

const ApiKey = sequelize.define("apiKey", {
  keys: { type: DataTypes.TEXT },
  name: { type: DataTypes.STRING },
  scope: { type: DataTypes.STRING },
});

async function syncTable() {
  try {
    // Membuat atau menghapus tabel dan kolom jika diperlukan
    await ApiKey.sync({ alter: true });
    console.log("Tabel berhasil disinkronkan");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

module.exports = ApiKey;

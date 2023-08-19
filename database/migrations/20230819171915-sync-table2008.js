"use strict";

/** @type {import('sequelize-cli').Migration} */
const { Sequelize } = require("sequelize");
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

const Test = require(`${path}/database/models/test`);

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    try {
      // Membuat atau menghapus tabel dan kolom jika diperlukan
      await Test.sync({ alter: true });
      console.log("Tabel berhasil disinkronkan");
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};

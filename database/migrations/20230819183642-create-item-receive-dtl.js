"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("item_receive_dtls", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      item_code: {
        type: Sequelize.STRING,
        unique: true,
        unique: "compositeIndex",
      },
      item_name: {
        type: Sequelize.STRING,
        unique: true,
        unique: "compositeIndex",
      },
      item_price: {
        type: Sequelize.DOUBLE,
      },
      item_qty: {
        type: Sequelize.INTEGER,
      },
      reject_qty: {
        type: Sequelize.INTEGER,
      },
      receiver: {
        type: Sequelize.STRING,
      },
      receive_date: {
        type: Sequelize.DATE,
      },
      createdBy: {
        type: Sequelize.STRING,
      },
      updatedBy: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("item_receive_dtls");
  },
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class item_receive_dtl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  item_receive_dtl.init(
    {
      item_code: DataTypes.STRING,
      item_name: DataTypes.STRING,
      item_price: DataTypes.DOUBLE,
      item_qty: DataTypes.INTEGER,
      reject_qty: DataTypes.INTEGER,
      receiver: DataTypes.STRING,
      receive_date: DataTypes.DATE,
      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "item_receive_dtl",
    }
  );
  return item_receive_dtl;
};

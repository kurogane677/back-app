"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class item_strg_dtl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  item_strg_dtl.init(
    {
      item_code: DataTypes.STRING,
      item_name: DataTypes.STRING,
      item_qty: DataTypes.INTEGER,
      item_shelf: DataTypes.STRING,
      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "item_strg_dtl",
    }
  );
  return item_strg_dtl;
};

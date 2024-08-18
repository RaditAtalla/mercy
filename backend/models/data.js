"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Data.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }
  Data.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.TEXT,
      operation: DataTypes.STRING,
      phone: DataTypes.STRING,
      photo: DataTypes.TEXT,
      gmap: DataTypes.STRING,
      email: DataTypes.STRING,
      website: DataTypes.STRING,
      description: DataTypes.TEXT,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Data",
    }
  );
  return Data;
};

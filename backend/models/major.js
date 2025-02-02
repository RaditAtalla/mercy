'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Major extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Major.init({
    about: DataTypes.TEXT,
    history: DataTypes.TEXT,
    major: DataTypes.TEXT,
    comajor: DataTypes.TEXT,
    culture: DataTypes.TEXT,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Major',
  });
  return Major;
};
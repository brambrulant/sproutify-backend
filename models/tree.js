'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tree.init({
    userId: DataTypes.NUMBER,
    name: DataTypes.STRING,
    createdOn: DataTypes.NUMBER,
    modifiedOn: DataTypes.NUMBER,
    image: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'tree',
  });
  return tree;
};
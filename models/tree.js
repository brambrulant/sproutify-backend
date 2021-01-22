"use strict";
const { Model } = require("sequelize");
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
  }
  tree.init(
    {
      id: { type: DataTypes.INTEGER, allowNull: false, unique: true },
      userSpotifyId: DataTypes.NUMBER,
      name: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tree",
    }
  );
  return tree;
};

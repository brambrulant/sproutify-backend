'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data.init({
    spotifyTrackId: DataTypes.STRING,
    title: DataTypes.STRING,
    artistId: DataTypes.STRING,
    genre: DataTypes.ARRAY,
    tempo: DataTypes.NUMBER,
    duration: DataTypes.NUMBER,
    instrumentalness: DataTypes.NUMBER,
    key: DataTypes.NUMBER,
    liveness: DataTypes.NUMBER,
    loudness: DataTypes.NUMBER,
    mode: DataTypes.NUMBER,
    valence: DataTypes.NUMBER,
    danceability: DataTypes.NUMBER,
    bars: DataTypes.ARRAY,
    beats: DataTypes.ARRAY,
    sections: DataTypes.ARRAY,
    segments: DataTypes.ARRAY,
    tatums: DataTypes.ARRAY
  }, {
    sequelize,
    modelName: 'data',
  });
  return data;
};
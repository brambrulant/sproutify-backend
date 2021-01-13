'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spotifyTrackId: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      artistId: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.ARRAY
      },
      tempo: {
        type: Sequelize.NUMBER
      },
      duration: {
        type: Sequelize.NUMBER
      },
      instrumentalness: {
        type: Sequelize.NUMBER
      },
      key: {
        type: Sequelize.NUMBER
      },
      liveness: {
        type: Sequelize.NUMBER
      },
      loudness: {
        type: Sequelize.NUMBER
      },
      mode: {
        type: Sequelize.NUMBER
      },
      valence: {
        type: Sequelize.NUMBER
      },
      danceability: {
        type: Sequelize.NUMBER
      },
      bars: {
        type: Sequelize.ARRAY
      },
      beats: {
        type: Sequelize.ARRAY
      },
      sections: {
        type: Sequelize.ARRAY
      },
      segments: {
        type: Sequelize.ARRAY
      },
      tatums: {
        type: Sequelize.ARRAY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('data');
  }
};
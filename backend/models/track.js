'use strict';
const {
  Model, Sequelize
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Track extends Model { };
  Track.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: DataTypes.STRING,
    soundtrack: DataTypes.BLOB,
    // notes: DataTypes.STRING,
    instrumentType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Track',
  });

  return Track;
};
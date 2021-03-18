'use strict';
const {
  Model, Sequelize
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShopItem extends Model { };

  ShopItem.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    prize: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'ShopItem',
  });
  ShopItem.associate = function(models) {
    ShopItem.hasMany(models.Image, { as: 'Image' });
  }
  return ShopItem;
};
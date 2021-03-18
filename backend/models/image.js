'use strict';
const {
  Model, Sequelize
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model { };

  Image.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    ShopItemId: {
     type: Sequelize.UUID,
     references: {
       model: 'ShopItems',
       key: 'id'
     }
    },
    image: DataTypes.BLOB,
  }, {
    sequelize,
    modelName: 'Image',
  });
  Image.associate = function(models) {
    Image.belongsTo(models.ShopItem, {foreignKey: 'ShopItemId', as: 'ShopItem'});
  };
  return Image;
};

const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

class Livre extends Model {}

Livre.init(
  {
    titre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    auteur: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nbPages: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    modelName: 'Livre',
    tableName: 'livres',
    timestamps: true
  }
);

module.exports = Livre;
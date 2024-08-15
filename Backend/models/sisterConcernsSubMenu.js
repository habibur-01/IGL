const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SisterConcernSubMenu = sequelize.define('sister_concern_submenus', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      subCategory: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.BLOB('long'),
        allowNull: false
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      website_URL: {
        type: DataTypes.STRING,
        allowNull: false
      }
})

module.exports = SisterConcernSubMenu;
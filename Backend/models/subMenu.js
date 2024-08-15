const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SubMenu = sequelize.define('SubMenu', {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subCategory: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  path: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = SubMenu;
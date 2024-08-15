const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AddPhoto = sequelize.define("gallery", {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  caption: {
    type: DataTypes.STRING,
    allowNull: false
  },

  year: {
    type: DataTypes.STRING,
    allowNull: false
  },

  photo: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = AddPhoto;

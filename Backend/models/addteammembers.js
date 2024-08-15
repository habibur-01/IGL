const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TeamMember = sequelize.define("team_members", {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subCategory: {
    type: DataTypes.STRING,
    allowNull: true
  },
  employeeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employeeId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  designition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  facebook_link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  linkedin_link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instagram_link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = TeamMember;

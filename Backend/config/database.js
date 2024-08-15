const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('igl_group', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: console.log, 
  });

module.exports = sequelize;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SisterConcern = sequelize.define('sister_concern', {
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    website_URL: {
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = SisterConcern;
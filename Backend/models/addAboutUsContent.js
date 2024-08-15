const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const About_Us = sequelize.define('about_us', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    designition: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = About_Us;
const Sequelize = require('sequelize')
const db = require('../db')

const survivorMembership = db.define('survivorMembership', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  alive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

module.exports = survivorMembership

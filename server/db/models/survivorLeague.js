const Sequelize = require('sequelize')
const db = require('../db')

const survivorLeague = db.define('survivor-league', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = survivorLeague

const Sequelize = require('sequelize')
const db = require('../db')

const survivorPick = db.define('survivor-pick', {
  week: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  isWinner: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = survivorPick

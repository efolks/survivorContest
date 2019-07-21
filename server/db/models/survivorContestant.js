const Sequelize = require('sequelize')
const db = require('../db')

const survivorContestant = db.define('survivor-contestant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = survivorContestant

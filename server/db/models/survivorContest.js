const Sequelize = require('sequelize')
const db = require('../db')

const survivorContest = db.define('survivor-contest', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = survivorContest

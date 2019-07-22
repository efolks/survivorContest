const Sequelize = require('sequelize')
const db = require('../db')

const survivorContest = db.define('survivorContest', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  currentWeek: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

module.exports = survivorContest

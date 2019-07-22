const Sequelize = require('sequelize')
const db = require('../db')

const nflTeam = db.define('nflTeam', {
  home: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = nflTeam

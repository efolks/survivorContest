const User = require('./user')
const survivorMembership = require('./survivorMembership')
const survivorContest = require('./survivorContest')
const survivorPick = require('./survivorPick')
const nflTeam = require('./nflTeam')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

survivorMembership.belongsTo(User)
survivorMembership.belongsTo(survivorContest)
// survivorMembership.hasOne(survivorPick)
survivorPick.belongsTo(survivorMembership, {as: 'owner'})
survivorPick.belongsTo(nflTeam, {as: 'pick'})
survivorPick.belongsTo(nflTeam, {as: 'opponent'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  survivorMembership,
  survivorContest,
  survivorPick,
  nflTeam
}

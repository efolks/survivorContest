const router = require('express').Router()
const {User, survivorMembership, survivorPick} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/memberships', async (req, res, next) => {
  try {
    const userId = req.user.id
    const userMemberships = await survivorMembership.findAll({
      where: {userId},
      include: [{model: survivorPick}]
    })
    res.send(userMemberships)
  } catch (error) {
    next(error)
  }
})

'use strict'

const db = require('../server/db')
const {
  User,
  survivorContest,
  nflTeam,
  survivorMembership,
  survivorPick
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'eric@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} users`)

  const contests = await Promise.all([
    survivorContest.create({name: 'Cody/s Test Contest'}),
    survivorContest.create({name: 'Murphy/s Test Contest'})
  ])

  console.log(`seeded ${contests.length} users`)

  const teams = await Promise.all([
    nflTeam.create({home: 'Indianapolis', name: 'Colts'}),
    nflTeam.create({home: 'New York', name: 'Giants'}),
    nflTeam.create({home: 'New England', name: 'Patriots'})
  ])

  console.log(`seeded ${teams.length} users`)

  const memberships = await Promise.all([
    survivorMembership.create({name: 'cody', userId: 1, survivorContestId: 1}),
    survivorMembership.create({name: 'eric', userId: 3, survivorContestId: 1}),
    survivorMembership.create({
      name: 'murphy',
      userId: 2,
      survivorContestId: 2
    }),
    survivorMembership.create({name: 'eric', userId: 3, survivorContestId: 2})
  ])

  console.log(`seeded ${memberships.length} users`)

  const picks = await Promise.all([
    survivorPick.create({week: 1, ownerId: 1, pickId: 2, opponentId: 1}),
    survivorPick.create({week: 1, ownerId: 2, pickId: 1, opponentId: 2}),
    survivorPick.create({week: 1, ownerId: 3, pickId: 3, opponentId: 1}),
    survivorPick.create({week: 1, ownerId: 2, pickId: 1, opponentId: 3})
  ])

  console.log(`seeded ${picks.length} users`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

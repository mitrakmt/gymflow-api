let db = require('./db.config')
let Sequelize = require('sequelize')

// Set table schema
const User = require('./user')(db)
const Workout = require('./workout')(db)

const UsersWorkouts = db.define('UsersWorkouts', {})
// const ChaptersTopics = db.define('ChaptersTopics', {})

// // HELPER TO DROP ALL TABLES
// db.sync({force: true}).then(() => {
//   console.log('Tables have been dropped')
// })

db.sync().then(function () {
  console.log('Tables have been Created')
})

module.exports = {
  db: db,
  Users: User,
  Workouts: Workout,
  UsersWorkouts: UsersWorkouts
}

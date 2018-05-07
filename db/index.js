const db = require('./db.config')
const Sequelize = require('sequelize')

// SET TABLE SCHEMA
const Users = require('./users')(db)
const Workouts = require('./workouts')(db)
const Follows = require('./follows')(db)

// CREATE JOIN TABLES
const UsersWorkouts = db.define('UsersWorkouts', {})

// ASSIGN RELATIONSHIPS
/* *
* Follows:Users
* */

// Users:Follows (1:n)
// Follows:Users (1:2)
// Users:Users (n:m)

// option { onDelete: 'cascade' } leaves no orphans http://dba.stackexchange.com/questions/44956/good-explanation-of-cascade-on-delete-update-behavior
// option { hooks: true } destroys each instance one by one to safely delete http://docs.sequelizejs.com/en/latest/docs/hooks/
Users.belongsToMany(Users, { as: 'followedUsers', through: Follows, foreignKey: 'followerId', onDelete: 'cascade', hooks: true })
Users.belongsToMany(Users, { as: 'followers', through: Follows, foreignKey: 'userId', onDelete: 'cascade', hooks: true })


// // HELPER TO DROP ALL TABLES
// db.sync({force: true}).then(() => {
//   console.log('Tables have been dropped')
// })

db.sync().then(function () {
  console.log('Tables have been Created')
})

module.exports = {
  db: db,
  Users: Users,
  Workouts: Workouts,
  Follows: Follows,
  UsersWorkouts: UsersWorkouts
}

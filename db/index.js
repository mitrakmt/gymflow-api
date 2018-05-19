const db = require('./db.config')
const Sequelize = require('sequelize')

// SET TABLE SCHEMA
const Users = require('./users')(db)
const Workouts = require('./workouts')(db)
const Follows = require('./follows')(db)
const Subscriptions = require('./subscriptions')(db)

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
Users.belongsToMany(Users, { as: 'followers', through: Follows, foreignKey: 'followerId', onDelete: 'cascade', hooks: true })
Users.belongsToMany(Users, { as: 'followedUsers', through: Follows, foreignKey: 'followedId', onDelete: 'cascade', hooks: true })

/* *
* Subscriptions:Users
* */

// Users:Subscriptions (1:n)
// Subscriptions:Users (1:2)
// Users:Users (n:m)


// option { onDelete: 'cascade' } leaves no orphans http://dba.stackexchange.com/questions/44956/good-explanation-of-cascade-on-delete-update-behavior
// option { hooks: true } destroys each instance one by one to safely delete http://docs.sequelizejs.com/en/latest/docs/hooks/
Users.belongsToMany(Users, { as: 'subscribedFrom', through: Subscriptions, foreignKey: 'subscribedFromId', onDelete: 'cascade', hooks: true })
Users.belongsToMany(Users, { as: 'subscribedTo', through: Subscriptions, foreignKey: 'subscribedToId', onDelete: 'cascade', hooks: true })

/* *
* Workouts:Users
* */

// Workouts:Users (n:m)
Workouts.belongsToMany(Users, {through: UsersWorkouts, foreignKey: 'workoutId'})
Users.belongsToMany(Workouts, {through: UsersWorkouts, foreignKey: 'userId'})

// // HELPER TO DROP ALL TABLES
// db.sync({force: true}).then(() => {
//   console.log('Tables have been dropped')
// })

db.sync().then(function () {
  console.log('Tables have been Created')
})

module.exports = {
  db,
  Users,
  Workouts,
  Follows,
  UsersWorkouts,
  Subscriptions
}

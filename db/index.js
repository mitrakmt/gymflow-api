let db = require('./db.config')
let Sequelize = require('sequelize')

// Set table schema
let Article = require('./article')(db)
let User = require('./user')(db)
let Donation = require('./donation')(db)

// const TopicsPosts = db.define('TopicsPosts', {})
// const ChaptersUsers = sequelize.define('ChaptersUsers', {})
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
  Articles: Article,
  Donations: Donation,
}

let db = require('./db.config')
let Sequelize = require('sequelize')

// Set table schema
let Article = require('./article')(db)
let Chapter = require('./chapter')(db)
let Post = require('./post')(db)
let Topic = require('./topic')(db)
let User = require('./user')(db)
let Donation = require('./donation')(db)
let Donator = require('./donator')(db)
let SoccerRegistration = require('./soccerRegistration')(db)

const TopicsPosts = db.define('TopicsPosts', {})
// const ChaptersUsers = sequelize.define('ChaptersUsers', {})
const ChaptersTopics = db.define('ChaptersTopics', {})

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
  Chapters: Chapter,
  Topics: Topic,
  Donator: Donator,
  Articles: Article,
  Posts: Post,
  Donations: Donation,
  SoccerRegistrations: SoccerRegistration
}

let Sequelize = require('sequelize')

module.exports = (db) => {
  const Donators = db.define('donators', {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    amount: {
      type: Sequelize.INTEGER
    }
  }, {
      freezeTableName: true
    })

  return Donators
}
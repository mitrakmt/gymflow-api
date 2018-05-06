let Sequelize = require('sequelize')

module.exports = (db) => {
    const Topics = db.define('topics', {
        title: {
            type: Sequelize.STRING
        },
        creator : {
            type: Sequelize.STRING
        }
    })

    return Topics
}
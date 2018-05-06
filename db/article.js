let Sequelize = require('sequelize')

module.exports = (db) => {
    const Articles = db.define('articles', {
        title: {
            type : Sequelize.STRING
        },
        author : {
            type : Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING(2000)
        }
    })

    return Articles
}
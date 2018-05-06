let Sequelize = require('sequelize')

module.exports = (db) => {   
    const Posts = db.define('posts', {
        creator : {
            type : Sequelize.STRING
        },
        content : {
            type : Sequelize.STRING(400)
        }
    })

    return Posts
}
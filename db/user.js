let Sequelize = require('sequelize')

module.exports = (db) => {    
    const Users = db.define('users', {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email_verified: {
            type: Sequelize.BOOLEAN
        },
    }, {
        freezeTableName: true
    })

    return Users
}
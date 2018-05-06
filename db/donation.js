let Sequelize = require('sequelize')

module.exports = (db) => {    
    const Donations = db.define('donations', {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        donation: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        }
    })

    return Donations
}
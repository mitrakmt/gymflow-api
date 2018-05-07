let Sequelize = require('sequelize')

module.exports = (db) => {    
    const Workouts = db.define('workouts', {
        name: {
            type: Sequelize.STRING
        },
    }, {
        freezeTableName: true
    })

    return Workouts
}
let Sequelize = require('sequelize')

module.exports = (db) => {    
    const Workouts = db.define('workouts', {
        name: {
            type: Sequelize.STRING
        },
        workout: {
            type: Sequelize.JSON
        }
    }, {
        freezeTableName: true
    })

    return Workouts
}
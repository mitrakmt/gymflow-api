let Sequelize = require('sequelize')

module.exports = (db) => {    
    const LoggedWorkouts = db.define('loggedWorkouts', {
        name: {
            type: Sequelize.STRING,
            required: true
        },
        workout: {
            type: Sequelize.JSON,
            required: true
        },
        userId: {
            type: Sequelize.INTEGER,
            required: true
        },
        parentWorkoutId: {
            type: Sequelize.INTEGER,
            required: true
        },
        completed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        timeCompleted: {
            type: Sequelize.DATE
        }
    }, {
        freezeTableName: true
    })

    return LoggedWorkouts
}
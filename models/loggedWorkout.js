let loggedWorkoutModel = {}
let LoggedWorkout = require('../db').LoggedWorkouts
let _ = require('lodash')

loggedWorkoutModel.LOG_WORKOUT = (userId, name, workout, parentWorkoutId) => {
    return LoggedWorkout.create({
        userId,
        name,
        workout,
        parentWorkoutId
    })
    .then(workout => {
        return workout
    })
}

loggedWorkoutModel.GET_LOGGED_WORKOUT = (userId, workoutId) => {
    return LoggedWorkout.findOne({
        where: {
            id: workoutId
        }
    })
    .then(workout => {
        return {
            workout
        }
    })
}

loggedWorkoutModel.GET_LOGGED_WORKOUTS = (userId) => {
    return LoggedWorkout.findAll({
        where: {
            userId
        }
    })
    .then(workouts => {
        return {
            workouts
        }
    })
}

loggedWorkoutModel.UPDATE_LOGGED_WORKOUT = (userId, workoutId, dataToUpdate) => {
    let updatedWorkout = _.pickBy(dataToUpdate, (item) => {
        return !_.isUndefined(item)
    })

    return LoggedWorkout.findOne({
        where: {
            id: workoutId,
            userId
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'userId']
        }
    })
    .then(loggedWorkout => {
        return loggedWorkout.update(
            updatedWorkout
        ).then(status => {
            return {
                workoutUpdated: true
            }
        })
    })
}

loggedWorkoutModel.COMPLETE_LOGGED_WORKOUT = (userId, workoutId) => {
    return LoggedWorkout.update(
        { 
            completed: true,
            timeCompleted: Date.now()
        },
        { 
            where: { 
                id: workoutId,
                userId
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'userId']
            }
        }
      )
    .then(result => {
        return {
            workoutUpdated: true
        }
    })
}

// Delete a logged workout of the signed in user
loggedWorkoutModel.DELETE_LOGGED_WORKOUT = (userId, workoutId) => {
    return LoggedWorkout.destroy({
        where: {
            userId,
            id: workoutId
        }
    })
    .then(workout => {
        return {
            deleted: true
        }
    })
}

module.exports = loggedWorkoutModel
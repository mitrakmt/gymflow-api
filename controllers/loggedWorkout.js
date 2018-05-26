let loggedWorkoutController = {}
let loggedWorkoutModel = require('../models/loggedWorkout')

loggedWorkoutController.LOG_WORKOUT = (req, res) => {
    let userId = req.user.id
    let name = req.body.name
    let workout = req.body.workout
    let parentWorkoutId = req.body.parentWorkoutId

    // Loop through sets to add completed boolean
    for (let setIndex = 0; setIndex < workout.length; setIndex++) {
        workout[setIndex].completed = false
        workout[setIndex].timeCompleted = null
    }

    return loggedWorkoutModel.LOG_WORKOUT(userId, name, workout, parentWorkoutId)
        .then(response => {
            res.status(200).send(response)
        })
}

loggedWorkoutController.GET_LOGGED_WORKOUTS = (req, res) => {
    let userId = req.user.id

    return loggedWorkoutModel.GET_LOGGED_WORKOUTS(userId)
        .then(response => {
            res.status(200).send(response)
        })
}

loggedWorkoutController.COMPLETE_LOGGED_WORKOUT = (req, res) => {
    let userId = req.user.id
    let workoutId = req.params.workoutId

    return loggedWorkoutModel.COMPLETE_LOGGED_WORKOUT(userId, workoutId)
        .then(response => {
            res.status(200).send(response)
        })
}


loggedWorkoutController.GET_LOGGED_WORKOUT = (req, res) => {
    let userId = req.user.id
    let workoutId = req.params.workoutId

    return loggedWorkoutModel.GET_LOGGED_WORKOUT(userId, workoutId)
        .then(response => {
            res.status(200).send(response)
        })
}

loggedWorkoutController.UPDATE_LOGGED_WORKOUT = (req, res) => {
    let userId = req.user.id
    let workoutId = req.params.workoutId
    let updatedWorkout = req.body.updatedWorkout

    return loggedWorkoutModel.UPDATE_LOGGED_WORKOUT(userId, workoutId, updatedWorkout)
        .then(response => {
            res.status(200).send(response)
        })
}

loggedWorkoutController.DELETE_LOGGED_WORKOUT = (req, res) => {
    let userId = req.user.id
    let workoutId = req.params.workoutId

    return loggedWorkoutModel.DELETE_LOGGED_WORKOUT(userId, workoutId)
        .then(response => {
            res.status(200).send(response)
        })
}

module.exports = loggedWorkoutController
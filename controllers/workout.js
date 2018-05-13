let workoutController = {}
let Promise = require("bluebird")
let workoutModel = require('../models/workout')

// ROUTE -- /
// .post(workoutController.CREATE_WORKOUT)
workoutController.CREATE_WORKOUT = (req, res) => {
    let name = req.body.name
    let workout = req.body.workout
    let userId = req.user.id

    return workoutModel.CREATE_WORKOUT(name, workout, userId)
        .then(workout => {
            res.status(200).send(workout)
        })
}

// .get(workoutController.GET_WORKOUTS)
workoutController.GET_WORKOUTS = (req, res) => {
    let userId = req.user.id
    
    return workoutModel.GET_WORKOUTS(userId)
        .then(workouts => {
            res.status(200).send(workouts)
        })
}

// ROUTE -- /:workoutId
// .put(workoutController.UPDATE_WORKOUT)
workoutController.UPDATE_WORKOUT = (req, res) => {
    let userId = req.user.id
    let workoutId = req.params.workoutId
    let dataToUpdate = req.body

    return workoutModel.UPDATE_WORKOUT(userId, workoutId, dataToUpdate)
        .then(response => {
            res.status(200).send(response)
        })
}

// .get(workoutController.GET_WORKOUT)
workoutController.GET_WORKOUT = (req, res) => {
    let userId = req.user.id
    let workoutId = req.params.workoutId

    return workoutModel.GET_WORKOUT(userId, workoutId)
        .then(workout => {
            res.status(200).send(workout)
        })
}

// .delete(workoutController.DELETE_WORKOUT)
workoutController.DELETE_WORKOUT = (req, res) => {
    let userId = req.user.id
    let workoutId = req.params.workoutId

    return workoutModel.DELETE_WORKOUT(userId, workoutId)
        .then(response => {
            res.status(200).send(response)
        })
}


// ROUTE -- /user/:userId
// .get(workoutController.GET_USER_WORKOUTS)
workoutController.GET_USER_WORKOUTS = (req, res) => {
    let userId = req.params.userId

    return workoutModel.GET_USER_WORKOUTS(userId)
        .then(workouts => {
            res.status(200).send(workouts)
        })
}

// ROUTE -- /user/:userId/:workoutId
// .get(workoutController.GET_USER_WORKOUT)
workoutController.GET_USER_WORKOUT = (req, res) => {
    let userId = req.params.userId
    let workoutId = req.params.workoutId

    return workoutModel.GET_USER_WORKOUT(userId, workoutId)
        .then(workout => {
            res.status(200).send(workout)
        })
}

module.exports = workoutController
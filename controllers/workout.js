let workoutController = {}
let Promise = require("bluebird")
let workoutModel = require('../models/workout')

// ROUTE -- /
// .post(workoutController.CREATE_WORKOUT)
workoutController.CREATE_WORKOUT = (req, res) => {
    let name = req.body.name
    let workout = req.body.workout
    let userId = req.body.userId

    return workoutModel.CREATE_WORKOUT(name, workout, userId)
        .then(workout => {
            res.status(200).send(workout)
        })
}

// .get(workoutController.GET_WORKOUTS)
workoutController.GET_WORKOUTS = (req, res) => {
    // let userId = req.headers.userId
    
    return workoutModel.GET_WORKOUTS(userId)
        .then(response => {
            res.status(200).send(response)
        })
}

// ROUTE -- /:workoutId
// .put(workoutController.UPDATE_WORKOUT)
workoutController.UPDATE_WORKOUT = (req, res) => {
    return workoutModel.UPDATE_WORKOUT()
        .then(response => {
            res.status(200).send(response)
        })
}

// .get(workoutController.GET_WORKOUT)
workoutController.GET_WORKOUT = (req, res) => {
    console.log('req.params', req.params)
    let workoutId = req.params.workoutId
    return workoutModel.GET_WORKOUT(workoutId)
        .then(workout => {
            res.status(200).send(workout)
        })
}

// .delete(workoutController.DELETE_WORKOUT)
workoutController.DELETE_WORKOUT = (req, res) => {
    return workoutModel.DELETE_WORKOUT()
        .then(response => {
            res.status(200).send(response)
        })
}


// ROUTE -- /user
// .get(workoutController.GET_USER_WORKOUTS)
workoutController.GET_USER_WORKOUTS = (req, res) => {
    return workoutModel.GET_USER_WORKOUTS()
        .then(response => {
            res.status(200).send(response)
        })
}

// ROUTE -- /user/:workoutId
// .get(workoutController.GET_USER_WORKOUT)
workoutController.GET_USER_WORKOUT = (req, res) => {
    return workoutModel.GET_USER_WORKOUT()
        .then(response => {
            res.status(200).send(response)
        })
}



module.exports = workoutController
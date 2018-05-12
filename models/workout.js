let workoutModel = {}
let Workouts = require('../db').Workouts

// Create a workout for the logged in user
workoutModel.CREATE_WORKOUT = (name, workout, userId) => {
    return Workouts.create({
        name,
        workout,
        userId
    })
    .then(workout => {
        return workout
    })
}

// Retrieve all workouts for the logged in user
workoutModel.GET_WORKOUTS = (id) => {
    // this needs to be changed to get all workouts for the one logged in user
    return Workouts.findOne({
        id
    })
    .then(workouts => {
        return workouts
    })
}

workoutModel.UPDATE_WORKOUT = () => {

}

// Retrieve one workout from the logged in user
workoutModel.GET_WORKOUT = (id) => {
    // this needs to be changed to get one workout from the logged in user
    return Workouts.findOne({
        id
    })
    .then(workouts => {
        return workouts
    })
}

// Delete a workout of the logged in user
workoutModel.DELETE_WORKOUT = () => {

}

// Retrieve a user's list of workouts
workoutModel.GET_USER_WORKOUTS = () => {
    // this needs to be changed to get all workouts for a specific user
    return Workouts.findOne({
        id
    })
    .then(workouts => {
        return workouts
    })
}

// Retrieve a workout from a specific user
workoutModel.GET_USER_WORKOUT = () => {
    // this needs to be changed to get a specific workout from a specific user
    return Workouts.findOne({
        id
    })
    .then(workouts => {
        return workouts
    })
}

module.exports = workoutModel
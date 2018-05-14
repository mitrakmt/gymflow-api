let workoutModel = {}
let Workouts = require('../db').Workouts
let _ = require('lodash')

// Create a workout for the logged in user
workoutModel.CREATE_WORKOUT = (name, workout, userId) => {
    return Workouts.create({
        name,
        workout,
        owner: userId
    })
    .then(workout => {
        return workout.setUsers(
            userId
        )
        .then(status => {
            // TODO: make sure this is a promise and doesn't error, or catch error if it does
            // console.log('status in create workout', status)
            return workout
        })
    })
}

// Retrieve all workouts for the logged in user
workoutModel.GET_WORKOUTS = (id) => {
    // Make sure this returns IDs as well
    return Workouts.findAll({
        where: {
            owner: id
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'owner']
        }
    })
    .then(workouts => {
        return {
            workouts
        }
    })
}

workoutModel.UPDATE_WORKOUT = (id, workoutId, dataToUpdate) => {
    let updatedWorkout = _.pickBy(dataToUpdate, (item) => {
        return !_.isUndefined(item)
    })

    return Workouts.findOne({
        where: {
            id: workoutId,
            owner: id
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'owner']
        }
    })
    .then(workout => {
        return workout.update(
            updatedWorkout
        ).then(status => {
            console.log('status in update workout', status)
            return workout
        })
    })
}

// Retrieve one workout from the logged in user
workoutModel.GET_WORKOUT = (id, workoutId) => {
    return Workouts.findOne({
        where: {
            owner: id,
            id: workoutId
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'owner']
        }
    })
    .then(workout => {
        return workout
    })
}

// Delete a workout of the logged in user
workoutModel.DELETE_WORKOUT = (id, workoutId) => {
    return Workouts.findOne({
        where: {
            owner: id,
            id: workoutId
        }
    })
    .then(workout => {
        workout.destroy()
            .then(status => {
                // TODO: check to see if we can return error here
                return {
                    deleted: true
                }
            })
    })
}

// Retrieve a user's list of workouts
workoutModel.GET_USER_WORKOUTS = (id) => {
    // TODO: need to verify that user is allowed to have those workouts
    return Workouts.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'owner']
        }
    })
    .then(workouts => {
        if (worouts) {
            return {
                workouts
            }
        }
        return []
    })
}

// Retrieve a workout from a specific user
workoutModel.GET_USER_WORKOUT = (id, workoutId) => {
    // TODO: need to verify that user is allowed to have this workout
    return Workouts.findOne({
        where: {
            owner: id,
            id: workoutId
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'owner']
        }
    })
    .then(workout => {
        return workout
    })
}

module.exports = workoutModel
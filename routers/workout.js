const workoutRouter = require('express').Router()
const workoutController = require('../controllers/workout')
const checkJwt = require('../middleware/auth')

workoutRouter.route('/')
    .get(workoutController.GET_WORKOUTS)
    .post(checkJwt, workoutController.CREATE_WORKOUT)

workoutRouter.route('/:workoutId')
    .get(workoutController.GET_WORKOUT)
    .put(workoutController.UPDATE_WORKOUT)
    .delete(workoutController.DELETE_WORKOUT)

workoutRouter.route('/user')
    .get(workoutController.GET_USER_WORKOUTS)

workoutRouter.route('/user/:workoutId')
    .get(workoutController.GET_USER_WORKOUT)

module.exports = workoutRouter
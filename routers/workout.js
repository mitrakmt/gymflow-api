const workoutRouter = require('express').Router()
const workoutController = require('../controllers/workout')
const checkJwt = require('../middleware/auth')

workoutRouter.route('/')
    .get(checkJwt, workoutController.GET_WORKOUTS)
    .post(checkJwt, workoutController.CREATE_WORKOUT)

workoutRouter.route('/:workoutId')
    .get(checkJwt, workoutController.GET_WORKOUT)
    .put(checkJwt, workoutController.UPDATE_WORKOUT)
    .delete(checkJwt, workoutController.DELETE_WORKOUT)

workoutRouter.route('/user/:userId')
    .get(checkJwt, workoutController.GET_USER_WORKOUTS)

workoutRouter.route('/user/:userId/:workoutId')
    .get(checkJwt, workoutController.GET_USER_WORKOUT)

module.exports = workoutRouter
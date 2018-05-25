const workoutRouter = require('express').Router()
const workoutController = require('../controllers/workout')
const checkJwt = require('../middleware/auth')
const validateWorkoutSchema = require('middleware/validateWorkoutSchema')

/**
 * /Workout: Routes to access workout functionality
*/

workoutRouter.route('/')
    /**
     * @api {get} /workout Get current user's workouts
     * @apiName GetWorkouts
     * @apiGroup Workout
     * @apiPermission authenticated user
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     *
     * @apiSuccess {Array} workouts Array of the user's workouts.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "workouts": [
     *          {
     *             "name": "Some Workout",
     *             "id": 1
     *          }
     *       ]
     *     }
     *
     * @apiError Unauthorized Not an authorized or authenticated user.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 Not Found
     *     {
     *       "error": "Unauthorized",
     *       "message": "Error response"
     *     }
     */
    .get(checkJwt, workoutController.GET_WORKOUTS)
     /**
     * @api {post} /workout Create new workout
     * @apiName CreateWorkout
     * @apiGroup Workout
     * @apiPermission authenticated user
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     * 
     * @apiParam {String} name Name of workout.
     * @apiParam {Array} workout The workout which should likely be an array of objects.
     *
     * @apiSuccess {String} name Name of the workout.
     * @apiSuccess {Array} workout The workout array.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "name": "some name",
     *       "workout": []
     *     }
     * 
     * @apiError Unauthorized Not an authorized or authenticated user.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 Not Found
     *     {
     *       "error": "Unauthorized",
     *       "message": "Error response"
     *     }
     */
    .post(checkJwt, validateWorkoutSchema, workoutController.CREATE_WORKOUT)

workoutRouter.route('/:workoutId')
    /**
     * @api {get} /workout/:workoutId Get a specific workout
     * @apiName GetWorkout
     * @apiGroup Workout
     * @apiPermission authenticated user
     * @apiPermission owner of the workout
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     *
     * @apiSuccess {String} name Name of the workout.
     * @apiSuccess {Array} workout The workout array.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "name": "Some Workout",
     *       "workout": []
     *     }
     *
     * @apiError Unauthorized Not an authorized or authenticated user.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 Not Found
     *     {
     *       "error": "Unauthorized",
     *       "message": "Error response"
     *     }
     */
    .get(checkJwt, workoutController.GET_WORKOUT)
    /**
     * @api {put} /workout/:workoutId Update a workout
     * @apiName UpdateWorkout
     * @apiGroup Workout
     * @apiPermission authenticated user
     * @apiPermission owner of the workout
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     * 
     * @apiParam {String} name Name of workout.
     * @apiParam {Array} workout The updated workout.
     *
     * @apiSuccess {String} name Updated name of the workout.
     * @apiSuccess {Array} workout Updated workout array.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "name": "some workout",
     *       "workout": []
     *     }
     * 
     * @apiError Unauthorized Not an authorized or authenticated user.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 Not Found
     *     {
     *       "error": "Unauthorized",
     *       "message": "Error response"
     *     }
     */
    .put(checkJwt, validateWorkoutSchema, workoutController.UPDATE_WORKOUT)
     /**
     * @api {delete} /workout/:workoutId Delete a workout
     * @apiName DeleteWorkout
     * @apiGroup Workout
     * @apiPermission authenticated user
     * @apiPermission owner of the workout
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     *
     * @apiSuccess {Bool} deleted True if deleted successfully.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "deleted": true
     *     }
     * 
     * @apiError Unauthorized Not an authorized or authenticated user.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 Not Found
     *     {
     *       "error": "Unauthorized",
     *       "message": "Error response"
     *     }
     */
    .delete(checkJwt, workoutController.DELETE_WORKOUT)

workoutRouter.route('/user/:userId')
    /**
     * @api {get} /workout/user/:userId Get other user's workout
     * @apiName GetOtherUsersWorkout
     * @apiGroup Workout
     * @apiPermission authenticated user
     * @apiPermission eventually there will be a permission around who can access other user's workouts
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     *
     * @apiSuccess {Array} workouts Array of the user's workouts.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "workouts": [
     *          {
     *             "name": "Some Workout",
     *             "id": 1
     *          }
     *       ]
     *     }
     *
     * @apiError Unauthorized Not an authorized or authenticated user.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 Not Found
     *     {
     *       "error": "Unauthorized",
     *       "message": "Error response"
     *     }
     */
    .get(checkJwt, workoutController.GET_USER_WORKOUTS)

workoutRouter.route('/user/:userId/:workoutId')
    /**
     * @api {get} /workout/user/:userId/:workoutId Get other user's workouts
     * @apiName GetOtherUsersWorkouts
     * @apiGroup Workout
     * @apiPermission authenticated user
     * @apiPermission eventually there will be a permission around who can access other user's workouts
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     *
     * @apiSuccess {String} name Name of the workout.
     * @apiSuccess {Array} workout The workout array.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "name": "Some Workout",
     *       "workout": []
     *     }
     *
     * @apiError Unauthorized Not an authorized or authenticated user.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 Not Found
     *     {
     *       "error": "Unauthorized",
     *       "message": "Error response"
     *     }
     */
    .get(checkJwt, workoutController.GET_USER_WORKOUT)

module.exports = workoutRouter
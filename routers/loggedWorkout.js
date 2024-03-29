let loggedWorkoutRouter = require('express').Router()
const loggedWorkoutController = require('../controllers/loggedWorkout')
const checkJwt = require('../middleware/auth')
const validateWorkoutSchema = require('../middleware/validateWorkoutSchema')

loggedWorkoutRouter.route('/')
    /**
     * @api {post} /loggedWorkout Log workout
     * @apiName LogWorkout
     * @apiGroup LoggedWorkout
     * @apiPermission authenticated user
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     * 
     * @apiParam {String} name Name of the workout to log
     * @apiParam {Array} workout Workout to log
     * @apiParam {Integer} parentWorkoutId ID of the workout template used
     *
     * @apiSuccess {Array} workout The workout array.
     * @apiSuccess {String} name Name of the workout.
     * @apiSuccess {Integer} id Id of the logged workout.
     * @apiSuccess {Integer} parentWorkoutId Id of the parent workout template.
     * @apiSuccess {Bool} completed Bool if completed.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "workout": [],
     *       "name": "somename",
     *       "id": 0,
     *       "parentWorkoutId": 0,
     *       "completed": false
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
    .post(checkJwt, validateWorkoutSchema, loggedWorkoutController.LOG_WORKOUT)
    /**
     * @api {get} /loggedWorkout Get all logged workouts
     * @apiName GetLoggedWorkouts
     * @apiGroup LoggedWorkout
     * @apiPermission authenticated user
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     *
     * @apiSuccess {Array} workouts Array of all logged workouts.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "workoutLogged": true
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
    .get(checkJwt, loggedWorkoutController.GET_LOGGED_WORKOUTS)

loggedWorkoutRouter.route('/:workoutId')
    /**
     * @api {post} /loggedWorout/:workoutId Complete workout
     * @apiName CompleteWorkout
     * @apiGroup LoggedWorkout
     * @apiPermission authenticated user
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     * 
     * @apiParam {Integer} workoutId ID of the logged workout to mark as completed.
     *
     * @apiSuccess {Bool} workoutUpdated Boolean if workout was updated successfully.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "workoutUpdated": true
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
    .post(checkJwt, loggedWorkoutController.COMPLETE_LOGGED_WORKOUT)
    /**
     * @api {put} /loggedWorout/:workoutId Log workout
     * @apiName UpdateLoggedWorkout
     * @apiGroup LoggedWorkout
     * @apiPermission authenticated user
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     * 
     * @apiParam {Integer} workoutId ID of the logged workout to update
     * @apiParam {String} name Name of the workout to update to
     * @apiParam {Array} workout Updated workout object
     *
     * @apiSuccess {Bool} workoutUpdated Boolean if workout was updated successfully.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "workoutUpdated": true
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
    .put(checkJwt, validateWorkoutSchema, loggedWorkoutController.UPDATE_LOGGED_WORKOUT)
    /**
     * @api {get} /loggedWorkout/:workoutId Get a logged workout
     * @apiName GetLoggedWorkout
     * @apiGroup LoggedWorkout
     * @apiPermission authenticated user
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     * 
     * @apiParam {Integer} workoutId ID of the logged workout to get
     *
     * @apiSuccess {Object} workout The logged workout
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "workout": {
     *          "name": "someName",
     *          "workout": []
     *       }
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
    .get(checkJwt, loggedWorkoutController.GET_LOGGED_WORKOUT)
     /**
     * @api {delete} /workout/:workoutId Delete a workout
     * @apiName DeleteWorkout
     * @apiGroup LoggedWorkout
     * @apiPermission authenticated user
     * @apiPermission Creator of the workout
     * 
     * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
     *
     * @apiParam {Integer} workoutId ID of the logged workout to delete
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
    .delete(checkJwt, loggedWorkoutController.DELETE_LOGGED_WORKOUT)

    module.exports = loggedWorkoutRouter


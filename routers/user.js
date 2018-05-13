const userRouter = require('express').Router()
const userController = require('../controllers/user')
const checkJwt = require('../middleware/auth')

userRouter.route('/')
    .get(checkJwt, userController.GET_USER)
    .post(userController.SIGN_UP)
    .put(checkJwt, userController.UPDATE_USER)
    .delete(checkJwt, userController.DELETE_USER)

userRouter.route('/login')
    .post(userController.LOGIN)

userRouter.route('/logout')
    .delete(checkJwt, userController.LOGOUT)

userRouter.route('/username/:username')
    .get(userController.CHECK_USERNAME_IN_USE)

userRouter.route('/:userId')
    .get(checkJwt, userController.GET_USER_PROFILE)

module.exports = userRouter

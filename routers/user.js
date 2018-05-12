const userRouter = require('express').Router()
const userController = require('../controllers/user')

userRouter.route('/')
    .post(userController.SIGN_IN)
    .delete(userController.SIGN_OUT)

userRouter.route('/signup')
    .post(userController.SIGN_UP)

userRouter.route('/:userId')
    .get(userController.GET_USER)
    .put(userController.UPDATE_USER)
    .delete(userController.DELETE_USER)

module.exports = userRouter

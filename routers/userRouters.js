const userRouter = require('express').Router()
const userController = require('../controllers/userController')

userRouter.route('/signin')
    .post(userController.SIGN_IN)

userRouter.route('/signup')
    .post(userController.SIGN_UP)

userRouter.route('/signout')
    .get(userController.SIGN_OUT)

userRouter.route('/:userId')
    .get(userController.GET_USER)
    .put(userController.UPDATE_USER)

module.exports = userRouter

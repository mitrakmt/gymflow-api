let emailRouter = require('express').Router()
let emailController = require('../controllers/emailController')

emailRouter.route('/contact')
    .post(emailController.CONTACT_US)

emailRouter.route('/signup')
    .post(emailController.SIGN_UP)

module.exports = emailRouter
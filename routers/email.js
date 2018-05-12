let emailRouter = require('express').Router()
let emailController = require('../controllers/email')

emailRouter.route('/contact')
    .post(emailController.CONTACT_US)

emailRouter.route('/signup')
    .post(emailController.SIGN_UP)

module.exports = emailRouter
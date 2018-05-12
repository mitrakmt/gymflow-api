const Router = require('express').Router()
const auth = require('./auth')
const user = require('./user')
const email = require('./email')
const workout = require('./workout')

Router.use('/auth', auth)
Router.use('/user', user)
Router.use('/email', email)
Router.use('/workout', workout)

module.exports = Router

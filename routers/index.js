const Router = require('express').Router()
const user = require('./user')
const email = require('./email')
const workout = require('./workout')

Router.use('/user', user)
Router.use('/email', email)
Router.use('/workout', workout)

module.exports = Router

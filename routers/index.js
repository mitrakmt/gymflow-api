const Router = require('express').Router()
const user = require('./user')
const email = require('./email')
const workout = require('./workout')
const follow = require('./follow')

Router.use('/user', user)
Router.use('/email', email)
Router.use('/workout', workout)
Router.use('/follow', follow)

module.exports = Router

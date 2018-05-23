const Router = require('express').Router()
const user = require('./user')
const email = require('./email')
const workout = require('./workout')
const follow = require('./follow')
const subscription = require('./subscription')
const loggedWorkout = require('./loggedWorkout')

Router.use('/user', user)
Router.use('/email', email)
Router.use('/workout', workout)
Router.use('/follow', follow)
Router.use('/subscription', subscription)
Router.use('/loggedWorkout', loggedWorkout)

module.exports = Router

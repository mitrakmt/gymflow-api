const Router   = require('express').Router()
const auth     = require('./authRouter')
const user     = require('./userRouters')
const email    = require('./emailRouter')

Router.use('/auth', auth)
Router.use('/user', user)
Router.use('/email', email)

module.exports = Router

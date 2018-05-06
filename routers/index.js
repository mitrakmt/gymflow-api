const Router   = require('express').Router()
const auth     = require('./authRouter')
const donation = require('./donationRouter')
const user     = require('./userRouters')
const email    = require('./emailRouter')

Router.use('/auth', auth)
Router.use('/user', user)
Router.use('/donations', donation)
Router.use('/email', email)

module.exports = Router

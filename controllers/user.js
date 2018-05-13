let userController = {}
let userModel = require('../models/user')
let authHelpers = require('../helpers/auth')
let Promise = require("bluebird")

userController.SIGN_UP = (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let username = req.body.username

    return userModel.SIGN_UP(email, password, username)
        .then(user => {
            let token = authHelpers.generateTokens(user.id)
            res.status(200).send(token)
        })
}

userController.LOGIN = (req, res) => {
    let email = req.body.email
    let password = req.body.password

    return userModel.LOGIN(email, password)
        .then(user => {
            if (user) {
                let getTokens = () => {
                    return new Promise((resolve, reject) => {
                        let tokens = authHelpers.generateTokens(user.id)
                        resolve(tokens)
                    })
                }

                getTokens()
                    .then(tokens => {
                        res.status(200).send(tokens)
                    })
                    
            } else {
                res.status(400).send('Incorrect email or password')
            }
        })
}

userController.LOGOUT = (req, res) => {
    res.status(200).send('Logged out')
}

userController.GET_USER = (req, res) => {
    let userId = req.user.id
    
    return userModel.GET_USER(userId)
        .then(user => {
            res.status(200).send(user)
        })
}

// /username/:username
userController.CHECK_USERNAME_IN_USE = (req, res) => {
    let username = req.params.username
    
    return userModel.CHECK_USERNAME_IN_USE(username)
    .then(inUse => {
        res.status(200).send(inUse)
    })
}

userController.GET_USER_PROFILE = (req, res) => {
    let userToFind = req.params.userId
    
    return userModel.GET_USER_PROFILE(userToFind)
        .then(user => {
            res.status(200).send(user)
        })
}

userController.DELETE_USER = (req, res) => {
    let userId = req.user.id

    return userModel.DELETE_USER(userId)
        .then(response => {
            res.status(200).send(response)
        })
}

userController.UPDATE_USER = (req, res) => {
    let userId = req.user.id
    let dataToUpdate = req.body

    return userModel.UPDATE_USER(userId, dataToUpdate)
        .then(user => {
            res.status(200).send(user)
        })
}

module.exports = userController
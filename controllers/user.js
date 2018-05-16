let userController = {}
let userModel = require('../models/user')
let authHelpers = require('../helpers/auth')
let Promise = require("bluebird")

userController.SIGN_UP = (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let username = req.body.username
    
    if (password.length < 7) {
        res.status(400).send({
            error: 'PasswordTooShort'
        })
    }

    return userModel.SIGN_UP(email, password, username)
        .then(response => {
            if (response.error) {
                res.status(400).send({
                    error: response.error
                })
            } else {
                let Authorization = authHelpers.generateTokens(response.user.id)
                res.status(200).send({
                    Authorization
                })
            }
        })
}

userController.LOGIN = (req, res) => {
    let email = req.body.email
    let password = req.body.password

    return userModel.LOGIN(email, password)
        .then(user => {
            if (user) {
                if (!user) {
                    res.status(400).send({
                        error: 'UserNotFound'
                    })
                    return;
                }
                let getTokens = () => {
                    return new Promise((resolve, reject) => {
                        let tokens = authHelpers.generateTokens(user.id)
                        resolve(tokens)
                    })
                }

                getTokens()
                    .then(Authorization => {
                        res.status(200).send({
                            Authorization
                        })
                    })
                    
            } else {
                res.status(400).send({
                    error: 'IncorrectCredentials'
                })
            }
        })
}

userController.LOGOUT = (req, res) => {
    res.status(200).send({
        loggedOut: true
    })
}

userController.GET_USER = (req, res) => {
    let userId = req.user.id
    
    return userModel.GET_USER(userId)
        .then(user => {
            res.status(200).send(user)
        })
}

userController.CHECK_USERNAME_IN_USE = (req, res) => {
    let username = req.params.username

    return userModel.CHECK_USERNAME_IN_USE(username)
        .then(inUse => {
            res.status(200).send(inUse)
        })
}

userController.GET_USER_PROFILE = (req, res) => {
    let userToFind = req.params.username
    
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
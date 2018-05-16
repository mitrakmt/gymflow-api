let userModel = {}
let User = require('../db').Users
let authHelpers = require('../helpers/auth')
let _ = require('lodash')

userModel.SIGN_UP = (email, password, username) => {
    return User.findOne({
        where: {
            username
        }
    })
    .then(userFound => {
        if (userFound) {
            return {
                error: 'UsernameTaken'
            }
        }
        return User.findOne({
            where: {
                email
            }
        })
        .then(userFound => {
            if (userFound) {
                return {
                    error: 'EmailTaken'
                }
            }
            return authHelpers.hashPassword(password)
                .then(hash => {
                    return User.create({
                        username,
                        email,
                        password: hash
                    })
                    .then(user => {
                        return {
                            user,
                            error: false
                        }
                    })
                })
        })
    })
}

userModel.LOGIN = (email, password) => {
    return User.findOne({
        where: {
            email
        }
    })
    .then(user => {
        return authHelpers.comparePasswords(password, user.password)
            .then(result => {
                if (result) {
                    return user
                }

                return null
            })
    })
}

userModel.GET_USER = (id) => {
    return User.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'password', 'id']
        }
    })
    .then(user => {
        return user
    })
}

userModel.GET_USER_PROFILE = (username) => {
    return User.findOne({
        where: {
            username
        },
        attributes: ['name', 'role', 'interests'],
    })
    .then(user => {
        return user
    })
}

userModel.CHECK_USERNAME_IN_USE = (username) => {
    return User.findOne({
        where: {
            username
        }
    })
    .then(user => {
        if (user) {
            return {
                taken: true
            }
        }
        return {
            taken: false
        }
    })
}

userModel.DELETE_USER = (id) => {
    // TODO: need to see if destroy was successful
    return User.destroy({
        where: {
            id
        }
    })
    .then(user => {
        return {
            deleted: true
        }
    })
}


userModel.UPDATE_USER = (id, dataToUpdate) => {
    let updatedUser = _.pickBy(dataToUpdate, (item) => {
        return !_.isUndefined(item)
    })
    return User.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'password']
        }
    })
    .then(user => {
        return user.update(
            updatedUser
        ).then(status => {
            return status
        })
    })
}

module.exports = userModel
let userModel = {}
let User = require('../db').Users
let authHelpers = require('../helpers/auth')

userModel.SIGN_UP = (email, password, username) => {
    return authHelpers.hashPassword(password)
        .then(hash => {
            return User.create({
                username,
                email,
                password: hash
            })
            .then(user => {
                return user
            })
        })
}

userModel.SIGN_IN = (email, password) => {
    return User.findOne({
        email
    })
    .then(user => {
        console.log(password, user.password)
        return authHelpers.comparePasswords(password, user.password)
            .then(result => {
                if (result) {
                    return user
                }

                return null
            })
    })
}

userModel.GET_USER = (userId) => {
    return User.findOne({
        email
    })
    .then(user => {
        return user
    })
}

userModel.DELETE_USER = (userId) => {
    return User.destroy({
        email
    })
    .then(user => {
        return user
    })
}


userModel.UPDATE_USER = () => {
    return 'empty'
}

module.exports = userModel
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
        }
    })
    .then(user => {
        return user
    })
}

userModel.DELETE_USER = (id) => {
    return User.findOne({
        where: {
            id
        }
    })
    .then(user => {
        user.destroy()
        return true
    })
}


userModel.UPDATE_USER = (id, dataToUpdate) => {
    let updatedUser = _.pickBy(dataToUpdate, (item) => {
        return !_.isUndefined(item)
    })
    return User.findOne({
        where: {
            id
        }
    })
    .then(user => {
        user.update(
            updatedUser
        )
    })
    .then(user => {
        return user
    })
}

module.exports = userModel
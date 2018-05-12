let userModel = {}
let User = require('../db').Users
let authHelpers = require('../helpers/auth')

userModel.SIGN_UP = (email, password, name) => {
    return authHelpers.hashPassword(password)
        .then(hash => {
            console.log("Hash in signup model", hash)
            return User.create({
                name: name,
                email: email,
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

userModel.UPDATE_USER = () => {
    return 'empty'
}

module.exports = userModel
let interestModel = {}
let User = require('../db').Users
let Interest = require('../db').Interests
let _ = require('lodash')

interestModel.GET_INTERESTS = (userId) => {
    
}

interestModel.ADD_INTEREST = (userId, interest) => {

}

interestModel.DELETE_INTEREST = (userId, interest) => {
    
}

interestModel.GET_AVAILABLE_INTERESTS = () => {

}

interestModel.ADD_MASTER_INTEREST = (interest) => {
    return Interest.create({
        name: interest
    })
    .then(interest => {
        return {
            interest,
            error: false
        }
    })
}

interestModel.DELETE_MASTER_INTEREST = (interestId) => {
    return Interest.destroy({
        where: {
            id: interestId
        }
    })
    .then(interest => {
        return {
            deleted: true
        }
    })
}

module.exports = interestModel

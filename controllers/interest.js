
let interestController = {}
let interestModel = require('../models/interest')

interestController.GET_INTERESTS = (req, res) => {
    let userId = req.user.id

    interestModel.GET_INTERESTS(userId)
        .then(status => {
            res.status(200).send(status)
        })
}

interestController.ADD_INTEREST = (req, res) => {
    let userId = req.user.id
    let interest = req.body.interest

    interestModel.ADD_INTEREST(userId, interest)
        .then(response => {
            res.status(200).send(response)
        })
}

interestController.DELETE_INTEREST = (req, res) => {
    let userId = req.user.id
    let interest = req.body.interest

    interestModel.DELETE_INTEREST(userId, interest)
        .then(response => {
            res.status(200).send(response)
        })
}

interestController.GET_AVAILABLE_INTERESTS = (req, res) => {
    interestModel.GET_AVAILABLE_INTERESTS()
        .then(response => {
            res.status(200).send(response)
        })
}

interestController.ADD_MASTER_INTEREST = (req, res) => {
    interestModel.ADD_MASTER_INTEREST()
        .then(response => {
            res.status(200).send(response)
        })
}

module.exports = interestController

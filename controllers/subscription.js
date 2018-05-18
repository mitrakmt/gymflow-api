let subscriptionController = {}
let subscriptionModel = require('../models/subscription')

subscriptionController.SUBSCRIBE = (req, res) => {
    let subscribeToId = req.body.subscribeToId
    let userId = req.user.id

    // TODO
    res.status(200).send({
        subscribed: true
    })
}

subscriptionController.GET_SUBSCRIPTIONS = (req, res) => {
    let subscribeToId = req.body.subscribeToId
    let userId = req.user.id

    // TODO
    res.status(200).send({
        subscriptions: [
            {
                name: "Marc Fitt",
                username: "marcfitt",
                id: 1,
                pricePerMonth: 45
            }
        ]
    })
}

subscriptionController.DELETE_SUBSCRIPTION = (req, res) => {
    let unsubscribeFromId = req.body.unsubscribeFromId
    let userId = req.user.id

    // TODO
    res.status(200).send({
        unsubscribed: true
    })
}

module.exports = subscriptionController
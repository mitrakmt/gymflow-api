let subscriptionsModel = {}
const Subscriptions = require('../db').Subscriptions
const Users = require('../db').Users

subscriptionsModel.SUBSCRIBE = (userId, subscribedToId) => {
    // TODO: get info from influencer, cost
    // TODO: set up subscription and charge card

    return Subscriptions.create({
        subscribedFromId: userId,
        subscribedToId
    })
    .then(response => {
        return {
            subscribed: true
        }
    })
}

subscriptionsModel.GET_SUBSCRIPTIONS = (userId) => {
    return Subscriptions.findAll({
        where: {
          subscribedFromId: userId
        }
      })
      .then(subscriptions => {
        return subscriptions
      })
}

subscriptionsModel.DELETE_SUBSCRIPTION = (userId, unsubscribeFromId) => {
    // TODO: remove subscription in stripe

    return Subscriptions.destroy({
        where: {
            subscribedToId: unsubscribeFromId,
            subscribedFromId: userId
        }
    })
    .then(response => {
        return {
            unsubscribed: true
          }
    })
}

module.exports = subscriptionsModel
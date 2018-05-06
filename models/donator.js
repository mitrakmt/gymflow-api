let donatorModel = {}
let Donator = require('../db').Donator

donatorModel.FIND_OR_CREATE_DONATOR = (email, name, amount) => {
  let newAmount = amount / 100
  return Donator.findOrCreate({
    where: {
      email
    },
    defaults: {
      name,
      email,
      amount: newAmount
    }
  })
    .then(donator => {
      return donator
    })
}

donatorModel.UPDATE_DONATOR = (email, amount) => {
  return Donator.update({
    amount
  }, {
      where: {
        email
      }
    })
    .then(res => {
      return res
    })
}

donatorModel.GET_DONATOR = (userId) => {
  return 'empty'
}

donatorModel.GET_DONATORS = () => {
  return 'empty'
}

module.exports = donatorModel
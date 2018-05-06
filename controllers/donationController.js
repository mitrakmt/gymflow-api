let donationController = {}
let donationModel = require('../models/donation')
let donatorModel = require('../models/donator')
const stripe = require("stripe")(process.env.STRIPE_LIVE_KEY);

donationController.MAKE_DONATION = (req, res) => {
  let token = req.body.token
  let amount = req.body.amount
  let description = req.body.description
  let type = req.body.type
  let email = req.body.email
  let name = req.body.name
  let trackDonation = req.body.trackDonation

  let charge = stripe.charges.create({
    amount: Number(amount),
    currency: "usd",
    description: description,
    source: token.id,
  }, function (err, charge) {
    if (err) {
      console.log('err in charging', err)
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods: GET, POST, PUT");
      res.status(400).send(err)
    }
    else {
      if (trackDonation) {
        return donatorModel.FIND_OR_CREATE_DONATOR(email, name, amount)
          .then(result => {
            console.log('result[1]', result[1])
            if (!result[1]) {
              let newAmount = result[0].dataValues.amount + amount / 100
              console.log('result[0]', result[0])
              console.log('newAmount', newAmount)
              return donatorModel.UPDATE_DONATOR(email, newAmount)
                .then(updatedResult => {
                  return updatedResult
                })
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods: GET, POST, PUT");
            res.status(200).send(result)
          })
      } else {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods: GET, POST, PUT");
        res.status(200).send(charge)
      }
    }
  })
}

donationController.TRACK_DONATION = (req, res) => {
  let name = req.body.name || 'Anonymous',
    email = req.body.email,
    amount = req.body.amount,
    location = req.body.location,
    description = req.body.description

  return donationModel.TRACK_DONATION(name, email, amount, description, location)
    .then(result => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods: GET, POST, PUT");
      res.status(200).send(result)
    })
}

donationController.UPDATE_DONATION = (req, res) => {
  let name = req.body.name
  let donationId = req.body.donationId

  return donationModel.UPDATE_DONATION(name, donationId)
    .then(result => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods: GET, POST, PUT");
      res.status(200).send(result)
    })
}

donationController.GET_DONATIONS = (req, res) => {
  donationModel.GET_DONATIONS()
    .then(donations => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods: GET, POST, PUT");
      res.status(200).send(donations)
    })
}

module.exports = donationController
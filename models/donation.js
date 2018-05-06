let donationModel = {}
let Donation = require('../db').Donations
let _ = require('lodash')

donationModel.TRACK_DONATION = (name, email, amount, description) => {
  return Donation.create({
    name: name,
    email: email,
    donation: amount,
    description: description
  })
    .then(donation => {
      return donation
    })
}

donationModel.GET_DONATIONS = () => {
  return Donation.findAll({ limit: 30, order: '"updatedAt" DESC' })
    .then(donations => {
      let finalDonations = _.map(donations, (donation) => {
        let name
        let splitName = donation.name.split(' ')
        if (splitName.length <= 1) {
          name = donation.name
        } else {
          name = splitName[0] + ' ' + splitName[1][0] + '.'
        }

        return {
          name: name,
          amount: donation.donation,
          description: donation.description,
          location: donation.location
        }
      })
      return finalDonations
    })
}

donationModel.UPDATE_DONATION = (name, donationId) => {
  return Donation.update({
    name: name
  },
    {
      where: { id: donationId }
    })
    .then(donation => {
      console.log(donation)
      return donation
    })
}

module.exports = donationModel
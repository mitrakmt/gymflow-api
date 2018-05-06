const donationRouter = require('express').Router()
const donationController = require('../controllers/donationController')

donationRouter.route('/')
	.post(donationController.MAKE_DONATION)
	.get(donationController.GET_DONATIONS)
	.put(donationController.UPDATE_DONATION)

donationRouter.route('/trackDonation')
	.post(donationController.TRACK_DONATION)

module.exports = donationRouter

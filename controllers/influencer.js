let influencerController = {};
let influencerModel = require("../models/influencer");

influencerController.GET_INFLUENCERS = (req, res) => {
  influencerModel.GET_INFLUENCERS().then(status => {
    res.status(200).send(status);
  });
};

module.exports = influencerController;

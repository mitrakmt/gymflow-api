let influencerModel = {};
let User = require("../db").Users;

influencerModel.GET_INFLUENCERS = userId => {
  return User.findAll({
    where: {
      role: "influencer"
    },
    attributes: ["id", "username", "name"]
  }).then(influencers => {
    return influencers;
  });
};

module.exports = influencerModel;

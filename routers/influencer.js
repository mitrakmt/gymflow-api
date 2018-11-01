const influencerRouter = require("express").Router();
const influencerController = require("../controllers/influencer");
const checkJwt = require("../middleware/auth");

influencerRouter
  .route("/")
  /**
   * @api {get} / Get all influencers
   * @apiName GetInfluencers
   * @apiGroup Influencer
   * @apiPermission authenticated user
   *
   * @apiHeader (Authorization) {String} authorization Authorization token (normally a JWT included "Bearer" at the beginning, but please exclude that text before the token).
   *
   * @apiSuccess {Array} influencers All influencers.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "influencers": []
   *     }
   *
   * @apiError Unauthorized Not an authorized or authenticated user.
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 401 Not Found
   *     {
   *       "error": "Unauthorized",
   *       "message": "Error response"
   *     }
   */
  .get(checkJwt, influencerController.GET_INFLUENCERS);

module.exports = influencerRouter;

let jwt = require('express-jwt')
let jwksRsa = require('jwks-rsa')

const checkJwt = jwt({
  // Dynamically provide a signing key based
  // on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.DOMAIN}/`,
  algorithms: ['RS256']
});

module.exports = checkJwt

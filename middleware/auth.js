let jwt = require('jsonwebtoken')

let checkJwt = (req, res, next) => {
  var token = req.headers.authorization;
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log('err', err)
        return res.status(401).send({
            success: false,
            message: 'Unauthorized'
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.user = user;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(401).send({
      success: false,
      message: 'Sign in to continue.'
    });
  }
}

module.exports = checkJwt
let authHelpers = {}
let jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')

authHelpers.generateTokens = (id) => {
  let token = jwt.sign({
    id
  }, process.env.JWT_SECRET)

  return token
}

authHelpers.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (err) {
      return {
        succeeded: false,
        error: error
      }
    } else {
      return {
        succeeded: true,
        decoded: decoded
      }
    }
  })
}

authHelpers.hashPassword = (password) => {
  return bcrypt.hash(password, 10)
    .then(hash => {
      return hash
    })
}

authHelpers.comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash)
    .then(res => {
      return res
    })
}

module.exports = authHelpers
let authHelpers = {}
let jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')

authHelpers.generateTokens = (userId) => {
  let token = jwt.sign({
    data: {
      id: userId
    }
  }, process.env.JWT_SECRET, { expiresIn: '168h' })

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
  console.log(password)
  return bcrypt.hash(password, 10)
    .then(hash => {
      return hash
    })
}

authHelpers.comparePasswords = (password, hash) => {
  console.log('hash', hash)
  return bcrypt.compare(password, hash)
    .then(res => {
      console.log('res in comparePasswords', res)
      return res
    })
}

module.exports = authHelpers
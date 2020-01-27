const jwt = require('jsonwebtoken')

function signToken(user) {

    const payload = {
      username: user.username
    };
    const secret = process.env.JWT_SECRET || 'apple orange grapes cake'
  
    const options = {
      expiresIn: "1hr"
    }
    return (jwt.sign(payload, secret, options))
}

module.exports = signToken
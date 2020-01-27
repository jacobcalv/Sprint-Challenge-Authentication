const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const {token} = req.headers;

  if (token) {
    const secret = process.env.JWT_SECRET || 'apple orange grapes cake' 

    jwt.verify(token, secret, function(err, decodedToken) {
      if (err) {
        res.status(401).json({message: "Invalid Token, do you belong here?"})
      } else {
        req.token = decodedToken;
        next()
      }
  }); 
  } else {
    res.status(400).json({message:"log in again "})
  }
  
};

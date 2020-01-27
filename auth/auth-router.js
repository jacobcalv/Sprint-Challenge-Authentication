const router = require('express').Router();
const bcrypt = require('bcryptjs');

const authModel = require('./auth-model');
const signToken = require('./token-sign')

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  authModel.add(user)
    .then(addedUser => {
      res.status(201).json({message: "you did well", addedUser})
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.post('/login', (req, res) => {
  let {username, password} = req.body;

  authModel.findBy({username})
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)){
        const token = signToken(user)
        res.status(200).json({message: "good job", token})
      } else {
        res.status(401).json({message: 'invalid login information try again'})
      }
  })
  .catch(err => {
    res.status(500).json(err)
  })

});

module.exports = router;

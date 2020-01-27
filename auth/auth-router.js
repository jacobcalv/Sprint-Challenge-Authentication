const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;

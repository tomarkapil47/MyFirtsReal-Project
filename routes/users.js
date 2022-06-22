var express = require('express');
var router = express.Router();

const { Signup, login } = require('../controllers/userRegistration');

/* GET users listing. */
router.post('/register', Signup);
router.post('/login', login);

module.exports = router;

var express = require('express');
var router = express.Router();

//Import controller
var loginController = require('../controllers/login.js');

router.post('/', loginController.login_user);

module.exports = router;
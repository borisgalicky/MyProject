var express = require('express');
var router = express.Router();

//Import controller
var registerController = require('../controllers/register.js');

router.post('/', registerController.register_new_user);

module.exports = router;
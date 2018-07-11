let express = require('express');
let router = express.Router();

//Import controller
let registerController = require('../controllers/register.js');

router.post('/', registerController.register_new_user);

module.exports = router;
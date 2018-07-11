const db = require('../models/db');

exports.register_new_user = (req, res, next) => {
    let firstname = req.body.fn_input;
    let lastname = req.body.ln_input;
    let username = req.body.username_input;
    let email = req.body.mail_input;
    let password = req.body.password_input;
    console.log(req.body);
}
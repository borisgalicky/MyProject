var db = require('../models/db');
var ph = require('password-hash');

exports.register_new_user = (req, res, next) => {
    var firstname = req.body.fn_input;
    var lastname = req.body.ln_input;
    var username = req.body.username_input;
    var email = req.body.mail_input;
    var password = req.body.password_input;
    console.log(req.body);

    var selectEmail = "select email from customers where email=?";
    var selectUsername = "select username from customers where username=?";
    var insertUser = 'insert into customers(FirstName,LastName,Username,Email,Password,DateOfRegistration) values(?,?,?,?,?,CURRENT_TIMESTAMP())';

    db.query(selectEmail, [email], (err, result) => {
        if (err) return next(err);
        if (result.length == 0) {
            db.query(selectUsername, [username], (err, rslt) => {
                if (err) return next(err);
                if (rslt.length == 0) {
                    var hashedPassword = ph.generate(password);
                    db.query(insertUser, [firstname, lastname, username, email, hashedPassword], (err) => {
                        if (err) {
                            return next(err);
                        } else {
                            console.log('USER REGISTERED!');
                            res.redirect('../login.html');
                            // res.write('<p>Successfully registered!</p>');
                        }
                    });
                } else {
                    console.log('USER ALREADY EXISTS!');
                    res.redirect('../registration.html');
                    // res.write('<p>User with entered username already exists!</p>');
                }
            });
        } else {
            console.log('USER ALREADY EXISTS!');
            res.redirect('../registration.html');
            // res.write('<p>User with entered email already exists!</p>');
        }
    });
}
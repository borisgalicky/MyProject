var db = require('../models/db');
var express = require("express");
var jwt = require("jsonwebtoken");
var ph = require('password-hash');

exports.login_user = (req, res, next) => {
    var username = req.body.usrn_input;
    var password = req.body.pssw_input;

    var selectUsername = "select username from customers where username=?";
    var selectPassword = "select password from customers where username=?";

    db.query(selectUsername, [username], (err, result) => {
        if (err) return next(err);
        if (result.length == 0) {
            console.log('Invalid username!');
            res.redirect('../login.html');
        } else {
            if (result[0].username == username) {
                db.query(selectPassword, [username], (err, rslt) => {
                    var db_password = rslt[0].password;
                    var hashedResult = ph.verify(password, db_password);
                    if (err) {
                        return next(err);
                    } else {
                        if (hashedResult == false) {
                            console.log('Invalid password!');
                            res.redirect('../login.html');
                        } if (hashedResult == true) {
                            console.log("Everything's allright!");
                            /*const user = {
                                username: result[0].username
                            };
                            jwt.sign({ user }, "secret", (err, token) => {
                                res.json({
                                    token
                                });
                            });*/
                            res.redirect('../views/main.html');
                        }
                    }
                });
            }
        }
    });
}
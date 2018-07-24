var db = require('../models/db');
var express = require("express");
var app = express();
var jwt = require("jsonwebtoken")

exports.login_user = (req, res, next) => {
    var username = req.body.usrn_input;
    var password = req.body.pssw_input;

    var selectUsername = "select username from customers where username=?";
    var selectPassword = "select password from customers where password=?";

    db.query(selectUsername, [username], (err, result) => {
        if (err) return next(err);
        if (result.length == 0) {
            console.log('Invalid username!');
            res.redirect('../login.html');
        } else {
            if (result[0].username == username) {
                db.query(selectPassword, [password], (err, rslt) => {
                    if (err) {
                        console.log('Something fucked up');
                        return next(err);
                    } else {
                        if (rslt.length == 0) {
                            console.log('Invalid password!');
                            res.redirect('../login.html');
                        } else {
                            if (rslt[0].password == password) {
                                console.log("Everything's allright!");
                                console.log(result[0].username, rslt[0].password);
                                const user = {
                                    username: result[0].username,
                                    password: rslt[0].password
                                };
                                jwt.sign({ user }, "secret", (err, token) => {
                                    res.json({
                                        token
                                    });
                                });
                                res.redirect('../views/main.html');
                            }
                        }
                    }
                });
            }
        }
    });
}
var db = require('../models/db');
var express = require("express");
var app = express();

exports.login_user = (req, res, next) => {
    var username = req.body.usrn_input;
    var password = req.body.pssw_input;

    var selectUsername = "select username from customers where username=?";
    var selectPassword = "select password from customers where password=?";

    db.query(selectUsername, [username], (err, result) => {
        if (err) return next(err);
        if (result[0].username == username) {
            db.query(selectPassword, [password], (err, rslt) => {
                if (err) {
                    console.log('Something fucked up');
                    return next(err);
                } else {
                    db_username = result[0].username;
                    db_password = rslt[0].password;
                    if ((db_username == username) && (db_password == password)) {
                        console.log("Everything's allright!");
                        res.redirect('../views/main.html');
                    }
                }
            });
        }
    });
}
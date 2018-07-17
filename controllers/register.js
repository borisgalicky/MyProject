let db = require('../models/db');
let express = require ("express");
let app = express();

exports.register_new_user = (req, res, next)=>{
    let firstname = req.body.fn_input;
    let lastname = req.body.ln_input;
    let username = req.body.username_input;
    let email = req.body.mail_input;
    let password = req.body.password_input;
    console.log(req.body);

    let selectEmail = "select email from customers where email=?";
    let selectUsername = "select username from customers where username=?";
    let insertUser = 'insert into customers(FirstName,LastName,Username,Email,Password,DateOfRegistration) values(?,?,?,?,?,CURRENT_TIMESTAMP())';

    db.query(selectEmail,[email],(err,result)=>{
    if(err) return next(err);
        if(result.length == 0) {
            db.query(selectUsername,[username],(err,rslt)=>{
                if (err) return next(err);
                if(rslt.length == 0){
                    db.query(insertUser,[firstname,lastname,username,email,password],(err)=>{
                        if(err){
                            return next(err);
                        }else{
                            console.log('USER REGISTERED!');
                            res.redirect('../login.html');
                        }  
                    });
                }else{
                    console.log('USER ALREADY EXISTS!');
                    res.redirect('../views/registration.html');
                }
            });
        }else{
            console.log('USER ALREADY EXISTS!');
            res.redirect('../views/registration.html');
        }
    });
}
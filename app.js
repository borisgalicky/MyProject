require('dotenv').config();
var db = require("./models/db");
var express = require("express");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');

var port = 5000;
var app = express();
var path = require('path');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'login.html'));
});

var register = require('./routes/register');
var login = require('./routes/login');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/register', register);
app.use('/login', login);
app.use(express.static('./'));
app.listen(port);
console.log("Server is running on port " + port + "!");
let db = require("./models/db");
let express = require("express");
let bodyParser = require("body-parser");

let port = 5000;
let app = express();
let path = require('path');

app.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname, '.', 'login.html'));
});
let register = require('./routes/register');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/register', register);
app.use(express.static('./'));
app.listen(port);
console.log("Server is running on port " + port + "!");
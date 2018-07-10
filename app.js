let db = require("./models/db");
let express = require("express");
let port = 5000;
let app = express();
let path = require('path');
app.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname, '.', 'login.html'));
});
app.listen(port);
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/views", express.static(__dirname + '/views'));
app.use("/controllers", express.static(__dirname + '/controllers'));
console.log("Server is running on port " + port + "!");
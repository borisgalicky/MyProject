let db = require("./models/db");
let express = require("express");
let port = 5000;
let app = express();
let path = require('path');
app.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});
app.listen(port);
console.log("Server is running on port " + port + "!");
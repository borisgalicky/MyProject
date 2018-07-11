let mysql = require('mysql');

let db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "myproject"
  });

  db.connect((err) => {
    if (err){
      throw err;
      console.log("There was a problem with MySQL!");
    }else{
      console.log('MySQL connected!');
    }
  });

  module.exports = db;
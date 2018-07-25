var mysql = require('mysql');

var db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

db.connect((err) => {
  if (err) {
    console.log("There was a problem with MySQL!");
    throw err;
  } else {
    console.log('MySQL connected!');
  }
});

module.exports = db;
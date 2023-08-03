var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Monisha8012"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
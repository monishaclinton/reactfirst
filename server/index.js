const express = require("express");
const mysql = require("mysql")
const app = express();
app.use(express.json());
var cors = require('cors')
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(cors())

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react_chat"
});

app.get('/', (req, res) => { //get method

    res.send("hello");
})

// res.json({msg: 'This is CORS-enabled for a Single Route'})

app.post('/register_user', cors(), (req, res) => { //post method
    var sql = "INSERT INTO `users` (`user_id`, `user_firstname`, `user_lastname`,`user_password`, `user_email`, `user_phnno`, `user_status`, `user_dob`, `user__utc_added_on`) VALUES (NULL, '" + req.body['first_name'] + "', '" + req.body['last_name'] + "','" + req.body['password'] + "', '" + req.body['email'] + "', '" + req.body['mobile_number'] + "', '1', '" + req.body['date_of_birth'] + "', current_timestamp());";
    con.query(sql, function (err, result) {
        res.send("success");
    });

});
app.post('/get_user_row', cors(), (req, res) => { //post method
    var sql = "SELECT *  FROM `users` WHERE `user_email` = '" + req.body['email'] + "' AND `user_password` = '" + req.body['password'] + "'";
    con.query(sql, function (err, result) {
        res.send(result); //Sql output return to react server
    });

});


app.listen(3001, () => {
    console.log("running server");

});

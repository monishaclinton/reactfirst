const express = require("express");
const mysql = require("mysql")
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);
// const multer = require('multer');
app.use(express.json());
var cors = require('cors')

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
    var sql = "SELECT * FROM `users` WHERE `user_email` = '" + req.body['email'] + "'";
    con.query(sql, function (err, result) {

        if (result[0]) {
            res.send('failed');
        } else {
            var sql = "INSERT INTO `users` (`user_id`, `user_firstname`, `user_lastname`,`user_password`, `user_email`, `user_phnno`, `user_status`, `user_dob`, `user_utc_added_on`) VALUES (NULL, '" + req.body['first_name'] + "', '" + req.body['last_name'] + "','" + req.body['password'] + "', '" + req.body['email'] + "', '" + req.body['mobile_number'] + "', '1', '" + req.body['date_of_birth'] + "', current_timestamp());";
            con.query(sql, function (err, result) {
                res.send(result);
            });
        }
        //Sql output return to react server
    });
});
app.post('/get_user_row', cors(), (req, res) => { //post method
    var sql = "SELECT *  FROM `users` WHERE `user_email` = '" + req.body['email'] + "' AND `user_password` = '" + req.body['password'] + "'";
    con.query(sql, function (err, result) {
        res.send(result); //Sql output return to react server
    });

});
app.get('/get_user_name', cors(), (req, res) => { //post method
    var sql = "SELECT `user_id`,`user_firstname`, `user_lastname` FROM `users` "
    con.query(sql, function (err, result) {
        res.send(result); //Sql output return to react server
    });
});

app.post('/get_message_by_userid', cors(), (req, res) => {
    var sql = "SELECT * FROM `chat_messages` WHERE (`sender_id` = '" + req.body['sender_id'] + "' AND `receiver_id` = '" + req.body['receiver_id'] + "') or(`sender_id` = '" + req.body['receiver_id'] + "' AND `receiver_id` = '" + req.body['sender_id'] + "')";
    con.query(sql, function (err, result) {
        res.send(result); 
    });
});


app.post('/insert_chat_message',cors(), (req, res) => {

    var sql = "INSERT INTO `chat_messages` (`chat_id`, `sender_id`, `receiver_id`, `message_text`, `date_time`) VALUES (NULL, '" + req.body['sender_id'] + "', '" + req.body['receiver_id'] + "', '" + req.body['chat_message'] + "', '');";
    con.query(sql, function (err, result) {
            res.send('Message sent successfully');  
        });
           

 
});

app.get('/api/messages', (req, res) => {
    const { senderId, receiverId } = req.query;
    const query = `SELECT * FROM messages WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)`;

    connection.query(query, [senderId, receiverId, receiverId, senderId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching messages');
        } else {
            res.json(results);
        }
    });
});

app.listen(3001, () => {
    console.log("running server");
});

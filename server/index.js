const express = require("express");
const mysql = require("mysql")
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);
// const multer = require('multer');
const multer = require('multer');

const server_url = "http://localhost:3001";
app.use("/uploads", express.static(__dirname + "/uploads"));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for uploads
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + file.originalname.trim();
        cb(null, uniqueSuffix);
    },
});

const upload = multer({ storage: storage });
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
    })
});
app.post('/get_user_row', cors(), (req, res) => { //post method
    var sql = "SELECT * FROM `users` WHERE `user_email` = '" + req.body['email'] + "' AND `user_password` = '" + req.body['password'] + "'";
    con.query(sql, function (err, result) {
        res.send(result); //Sql output return to react server
    });

});
app.post('/get_user_row_by_user_id', cors(), (req, res) => {
    var sql = "SELECT * FROM `users` WHERE `user_id` = ' " + req.body['userid'] + "'";
    con.query(sql, function (err, result) {
        res.send(result);
        // console.log(result);
    });

});
app.get('/get_user_name', cors(), (req, res) => {
    var sql = "SELECT `user_id`,`user_firstname`, `user_lastname` FROM `users`"
    con.query(sql, function (err, result) {
        res.send(result); //Sql output return to react server
    });
});
app.get('/get_user_name_user', cors(), (req, res) => {
    var sql = "SELECT `friends_id` FROM `users` WHERE `user_id` = '" + req.query['user_id'] + "'";
    con.query(sql, function (err, result) {
        if (req.query['name_filter'] == "") {
            var sql = "SELECT `image_name`,`user_id`,`user_firstname`, `user_lastname` FROM `users` WHERE `user_id` IN (" + result[0].friends_id + ")"
        } else {
            var sql = "SELECT `image_name`,`user_id`,`user_firstname`, `user_lastname` FROM `users` WHERE `user_id` IN (" + result[0].friends_id + ") AND (`user_firstname` LIKE '%" + req.query['name_filter'] + "%' OR `user_lastname` LIKE '%" + req.query['name_filter'] + "%')"
            // res.send(sql)
        }

        con.query(sql, function (err, result) {
            res.send(result); //Sql output return to react server
        });
    });
});

app.post('/get_message_by_userid', cors(), (req, res) => {
    var sql = "SELECT * FROM `chat_messages` WHERE (`sender_id` = '" + req.body['sender_id'] + "' AND `receiver_id` = '" + req.body['receiver_id'] + "') or(`sender_id` = '" + req.body['receiver_id'] + "' AND `receiver_id` = '" + req.body['sender_id'] + "')";
    con.query(sql, function (err, result) {
        res.send(result);
    });
});


app.post('/insert_chat_message', cors(), (req, res) => {

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
app.post('/upload-image', upload.single('image'), cors(), (req, res) => {
    const { userid } = req.query;
    if (req.file) {
        const imageUrl = server_url + '/uploads/' + req.file.filename;

        const sql = "UPDATE users SET `image_name` = ? WHERE `user_id` = ?";
        const values = [imageUrl, userid];

        con.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error inserting image URL:', err);
                res.status(500).json({ message: 'Error uploading image' });
            } else {
                // console.log('Image URL inserted successfully:', imageUrl);
                res.send({ 'image_url': imageUrl });

            }
        });
    } else {
        res.status(400).json({ message: 'No file uploaded' });
    }
});
app.post('/update_user', cors(), (req, res) => {
    const { userid, firstName, lastName, email, mobileNumber, dateOfBirth } = req.body;

    // Build an SQL query to update user details
    const sql = `
        UPDATE users
        SET
            user_firstname = ?,
            user_lastname = ?,
            user_email = ?,
            user_phnno = ?,
            user_dob = ?
        WHERE user_id = ?
    `;

    con.query(sql, [firstName, lastName, email, mobileNumber, dateOfBirth, userid], (err, result) => {
        if (err) {
            console.error('Error updating user details:', err);
            res.status(500).json({ message: 'Error updating user details' });
        } else {
            res.json({ message: 'User details updated successfully' });
        }
    });
});

app.listen(3001, () => {
    console.log("running server");
});

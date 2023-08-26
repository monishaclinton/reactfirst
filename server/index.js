const express = require("express");
const mysql = require("mysql")
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);
// const multer = require('multer');
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
app.post('/get_user_name', cors(), (req, res) => { //post method
    
    var sql = "SELECT `user_firstname`, `user_lastname` FROM `users` WHERE 1"
    con.query(sql, function (err, result) {
        res.send(result); //Sql output return to react server
    });

});

  
  
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });
// const upload = multer({ storage: storage });
// app.post('/upload', upload.single('image'), (req, res) => {
//     const imageUrl = `http://localhost:${port}/uploads/${req.file.filename}`;
//     con.query('INSERT INTO `users`(`image_name`) VALUES (?)', [imageUrl], (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send(err);
//         } else {
//             res.status(200).send('Image uploaded and URL saved.');
//         }
//     });
// });

// app.get('/image', (req, res) => {
//     con.query('SELECT `image_name` FROM `users` WHERE 1 ORDER BY id DESC LIMIT 1', (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send(err);
//         } else {
//             res.json({ imageUrl: result[0].image_url });
//         }
//     });
// });
// io.on('connection', (socket) => {
//     console.log('A user connected');
  
//     // Handle incoming messages
//     socket.on('send_message', async (data) => {
//       // Store the message in the database
//       const { senderId, recipientId, message } = data;
//       await db.query('INSERT INTO messages (sender_id, recipient_id, message) VALUES (?, ?, ?)', [senderId, recipientId, message]);
  
//       // Broadcast the message to the recipient's WebSocket connection
//       const recipientSocket = io.sockets.connected[recipientId];
//       if (recipientSocket) {
//         recipientSocket.emit('new_message', data);
//       }
//     });
  
//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });
  
wss.on('connection', (ws) => {
    console.log('Client connected');
  
    ws.on('message', (message) => {
      console.log('Received:', message);
  
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          console.log('Sending:', message);
          client.send(message);
        }
      });
    });
  });
app.listen(3001, () => {
    console.log("running server");

});

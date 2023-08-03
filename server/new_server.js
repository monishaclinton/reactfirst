const express = require("express");
const cors = require("cors");
var mysql = require('mysql');
var connection  = require('./db_config');
var usersRouter = require('./routes/loadview');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route


// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
app.use('/users', usersRouter);



app.listen(8084);
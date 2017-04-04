'use strict'

//express makes it easier to talk to the server
var express = require('express');
var app = express();
//connecting to the server
var port = process.env.PORT || 3000;

//js library that builds SQL commands and send them to a RDS like PostgresSQL
var knex = require('knex');

//???
var morgan = require('morgan');
var bodyParser = require('body-parser');
app.use(morgan);
app.use(bodyParser);

//routes
var usersRoutes = require("./routes/users")

app.get('/', function(req, res){
  res.send('home page')
})

app.use('/users', usersRoutes)


app.listen(port, function() {
  console.log("Your Connected to JQuery = )", port);
});

module.exports = app;

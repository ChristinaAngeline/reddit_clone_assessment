'use strict'

//express makes it easier to talk to the server
var express = require('express');
var app = express();
//connecting to the server
var port = process.env.PORT || 3000;

//js library that builds SQL commands and send them to a RDS like PostgresSQL
var knex = require('knex');

var morgan = require('morgan');
var bodyParser = require('body-parser');
app.use('morgan');
app.use('body-parser');

//routes
var usersRoutes = require("./routes/users")
// var postsRoutes = require("./routes/posts");
//var commentsRoutes = require("./routes/comments")


//routes
app.get("/routes/users" , function(req, res){
  //res.send(users)
});

//app.get("/routes/posts");

//app.get("routes/comments");


app.use(function(req, res){
  res.send('Just Keep Swimming')
})



app.listen(port, function() {
  console.log("Your Connected to JQuery = )", port);
});

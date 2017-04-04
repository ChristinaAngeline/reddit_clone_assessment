'use strict'
var express = require('express');
var router = express.Router();

// require knex
const env = 'development';
const config = require('./knexfile.js') [env];
const knex = require('knex')(config);

router.route('/')
//all the users
  .get(function(req, res){
    knex('users')
    .select('id', 'name' 'username')
    .then((results) => {
      console.log(results);
      knex.destroy();
    })
  });

//just one user
  .get('/:users_id', function(req, res){
      var id = Number.parseInt(req.params.id);

      res.send(users[id]);
  })
//creating a users
.post(function(req, res){

})
//user wanting to update informations
.put(function(req, res){

})
//user wanting to delete something
.destroy(function(req, res){

})

app.use(function(req, res){
res.sendStatus(404);
})

module.exports = router;

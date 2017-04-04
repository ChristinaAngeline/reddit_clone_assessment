'use strict'
var express = require('express');
var router = express.Router();
// require knex

router.route('/')
  .get(functions(req, res){
    res.send('hello world')
  })

  .get('/':users_id, function(req, res){
      var id = Number.parseInt(req.params.id);

      res.send(users[id]);
  })

.post(function(req, res){

})

module.exports = router;

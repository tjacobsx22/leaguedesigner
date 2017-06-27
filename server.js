const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000');
});

app.get('/league/', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.send({msg: 'Hello World'});
});
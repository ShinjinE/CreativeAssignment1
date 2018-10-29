
var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();
var options = {
    host: '127.0.0.1',
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('ssl/server.crt')
  };
http.createServer(app).listen(80);
https.createServer(options, app).listen(443);
console.log("Servers Started");
app.get('/', function(req, res){
    console.log('in get');
  res.send('Hello from Express');
});
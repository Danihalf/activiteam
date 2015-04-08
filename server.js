<<<<<<< HEAD
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello from Halif!');
});

var server = app.listen(1337, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
=======
var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Halif\n');
}).listen(port);
>>>>>>> origin/master

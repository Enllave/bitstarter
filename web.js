var fs = require('fs');
var bufer = fs.readFileSync("index.html",'utf8');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(bufer);

});

var port = process.env.PORT || 8080;
app.use(express.static(__dirname +''));
app.listen(port, function() {
  console.log("Listening on " + port);
});

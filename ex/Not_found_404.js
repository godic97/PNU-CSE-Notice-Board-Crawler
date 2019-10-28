var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(req, res){
  var _url = req.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var title = queryData.id;

  if(pathname === '/'){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(`${queryData.id}\n`);
  } else{
    res.writeHead(404);
    res.end('Not found');
  }
});

app.listen(3000);

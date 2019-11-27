var http = require('http')
var config = require('./config.js')
var app =http.createServer(function(req,res){
     res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
     res.write('你好.nodejs')
     console.log(config.str)
     res.end();
})
app.listen(8002,'192.168.50.192')
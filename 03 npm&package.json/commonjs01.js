
var sd =require('silly-datetime')
var http = require('http')

var app =http.createServer(function(req,res){
     res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
     var d = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
     console.log(d)
     res.end();
})
app.listen(8002,'192.168.50.192')
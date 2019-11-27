var http =require('http')
var path =require('path')
var fs =require('fs')
var url=require('url');
var mime =require('./model/getminefromfile.js')

// console.log(mime.getMime(fs,'.css'));   //获取文件类型

http.createServer(function(req,res){
    var pathname =req.url

    if(pathname=='/') pathname='index.html';
    var extname=path.extname(pathname);
    if(pathname!='favicon.ico'){
        console.log(pathname)
        fs.readFile('static/'+pathname,function(err,data){
            if(err){
                console.log('404')
            }else{
                var mimetype =mime.getMime(fs,extname)
                res.writeHead(200,{"Content-Type":""+mimetype+";charset='utf-8'"});
                res.write(data);
                res.end(); /*结束响应*/
            }
        })
    }
}).listen(8001)

/* 获取get请求内容 */
var util=require('util');
var http=require('http');
var url=require('url');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('hello world!'+'\n')
	res.end(util.inspect(url.parse(req.url)))
}).listen(4100,'127.0.0.1')
//输入：http://127.0.0.1:4100/user?name=jone-chen&email=jone@126.com，可看到效果
var http=require('http');
var fs=require('fs');
var server=http.createServer();
server.on('request',function(req,res){
	res.writeHead(200,{'Content-Type':'image/png'})
	fs.createReadStream('./baidu.png').pipe(res)
}).listen(3100,'127.0.0.1');
console.log('Server running at http://127.0.0.1:3100/');
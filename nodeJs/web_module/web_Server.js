/* 使用nodejs创建web服务器;  */
var fs=require('fs');
var url=require('url');
var http=require('http');
http.createServer(onQuest).listen('4800','127.0.0.1');
function onQuest(req,res){
	var pathname=url.parse(req.url).pathname;
	console.log(pathname);
	fs.readFile(pathname.slice(1),function(err,data){
		if(err){
			console.log(err);
			res.writeHead(404,{'Content-Type':'text/html'});
		}else{
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write(data.toString());
		}
		//  发送响应数据
		res.end('111');
	})
}
console.log('Server running at http://127.0.0.1:4800/');

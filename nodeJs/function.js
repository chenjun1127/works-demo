var http=require('http')
var port=1000
function onReuqest(req,res){
	res.writeHead(200,{'Conteny-type':"text/paain"});
	res.write('hello world!')
	res.end()
}
http.createServer(onReuqest).listen(1000,'127.0.0.1')
console.log('服务器已运行')
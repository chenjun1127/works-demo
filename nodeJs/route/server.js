var http=require('http')
var url=require('url')
function start(route){
	function onRuquest(req,res){
		route(pathname);
		var pathname=url.parse(req.url).pathname;
		console.log("Request for " + pathname + " received.");
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.write("Hello World,welcome to nodeJs");
		res.end();
	}
	http.createServer(onRuquest).listen(4500)
	console.log('程序已经在运行在：http://localhost:4500/')
}
//exports.start=start;
module.exports=start;
 
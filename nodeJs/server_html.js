var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
	if (req.url == '/') {
		fs.readFile('./titles.json',function(err,data){
			if (err) console.log(err.stack)
			var titles=JSON.parse(data.toString());
			var output='<html><head></head><body>' +'<h1>Latest Posts</h1>' +'<ul>';
			for(var i in titles){
				output+='<li>' + titles[i].title + '</li>';
			}
			output+='<ul></body></html>';
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(output);
		})
	}
}).listen(1338,'127.0.0.1')
console.log('Server running at http://127.0.0.1:1338/');
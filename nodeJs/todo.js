//POST请求体字符串缓存
var http=require('http')
var url=require('url')
var items=[]
var server=http.createServer(function(req,res){
	switch(req.method){
		case "POST":
		var item='';
		req.setEncoding('utf8');
		req.on('data',function(chunk){
			item+=chunk
		});
		req.on('end',function(){
			items.push(item);
			res.end('ok'+'\n')
		})
		break;
		case "GET":
		items.forEach(function(item,i){
			res.write(i+')'+item+'\n')
		})
		res.end();
		break;
	}
})
server.listen(1338,'127.0.0.1')
console.log('Server running at http://127.0.0.1:1338/');
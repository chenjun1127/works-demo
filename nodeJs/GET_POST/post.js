/* 获取POST请求内容 */
var querystring=require('querystring')
var util=require('util');
var http=require('http');
http.createServer(onquest).listen('4200')
function onquest(req,res){
	var data='';
	req.on('data',function(chunk){
		data+=chunk
	})
	req.on('end',function(){
		//在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
		var post=querystring.parse(post);
		res.end(util.inspect(post));
	})
}
 
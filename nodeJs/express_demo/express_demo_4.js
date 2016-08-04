/* get方法获取数据 */
var express=require('express')
var app=express();
app.use(express.static('public'));
app.get('/form_get.html',function(req,res){
	res.sendFile( __dirname + "/" + "form_get.html" );
})
app.get('/process_get',function(req,res){
	// 输出 JSON 格式
	var response={
		first_name:req.query.first_name,
		last_name:req.query.last_name
	}
	console.log(response);
	res.end(JSON.stringify(response)) //将JSON对象转换为字符串； 
})
var server=app.listen(1001,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("应用实例，访问地址为 http://localhost:1001", host, port)
})
// 在浏览器中访问 http://127.0.0.1:1001/form_get.html可以看到效果 
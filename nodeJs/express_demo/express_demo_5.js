/* post方法获取数据 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlEncodeParser=bodyParser.urlencoded({extended:false})
app.use(express.static('public'))
app.get('/form_post.html',function(req,res){
	res.sendFile( __dirname + "/" + "form_post.html" );
})
app.post('/process_post',urlEncodeParser,function(req,res){
	// 输出 JSON 格式
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
var server=app.listen(1001,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("应用实例，访问地址为 http://localhost:1001", host, port)
})
// 在浏览器中访问 http://127.0.0.1:1001/form_post.html可以看到效果 
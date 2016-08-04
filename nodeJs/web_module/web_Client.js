/* 使用nodejs创建 Web 客户端 */
 
	var http=require('http');
	var options={
		host:'localhost',
		port:'4800',
		path: '/index.html' , 
		hostname : '127.0.0.1',   
	}
	// 处理响应的回调函数
	var callback=function(res){
		var body='';
		// 不断更新数据
		res.on('data',function(data){
			body+=data
		});
		res.on('end',function(){
			 // 数据接收完成
			 console.log(body);
		})
	}
	// 向服务端发送请求
	var req = http.request(options, callback);
	req.end();

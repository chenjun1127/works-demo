//http.request(options,[callback])
//request实现评论的提交；
var http=require('http');
var querystring=require('querystring');//可以把对象序列化；
var postData=querystring.stringify({
	'content':'老师讲的非常赞，支持老师111！',
	'cid':348
})
var options={
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:"POST",
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=b8b4e566-f366-4660-9f95-0456561c7050; imooc_isnew_ct=1450235477; IMCDNS=0; PHPSESSID=6upbq9ebpheaa2kc9nuvpgmhm6; http_referer=http%3A%2F%2Fwww.imooc.com%2Fcomment%2F348; loginstate=1; apsid=EwNzBhMGRjMzEwZTY2OGQ3M2NkMzQyNzgwMGU0ZTMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjA3MDgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABraXNzMTk4NjExMjdAMTI2LmNvbQAAAAAAAAAAAAAAADc1NGE3MDlmMzRiOWM1NDBmYzk1NTQ2OGYwNWYyM2RkRH5zVkR%2Bc1Y%3DMW; last_login_username=kiss19861127%40126.com; imooc_isnew=2; cvde=56737e08bdd77-5; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1450235483,1450409485; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1450409547',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}
var req=http.request(options,function(res){
	console.log("status:"+res.statusCode);
	console.log("headers:"+JSON.stringify(res.headers));
	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})
	res.on('end',function(){
		console.log('评论完毕！')
	})
})
req.on('error',function(e){
	console.log("error:"+e.message)
})
req.write(postData);
req.end();
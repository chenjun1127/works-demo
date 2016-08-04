var express=require('express');//引入模块
var cheerio=require('cheerio');
var superagent=require('superagent');
var app=express();
app.get('/',function(req,res,next){
    superagent.get('http://www.douban.com/')//请求页面地址
        .end(function(err,sres){//页面获取到的数据
            if(err) return next(err);
            var $=cheerio.load(sres.text);//用cheerio解析页面数据
            var arr=[];
            $(".movie-list li").each(function(index,element){//类似于jquery的操作，前端的小伙伴们肯定很熟悉啦
                var $element=$(element).find('.title a');
                arr.push(
                    {
                        title: $element.text(),
                        href: $element.attr('href')
                    }
                );
            });
            res.send(arr);
        })
});
app.listen(3000, function () {
    console.log('app is listening at port 3000');
});
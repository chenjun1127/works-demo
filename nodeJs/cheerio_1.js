/**
 * Created by john on 2016/3/25.
 */
// 新浪网导航获取小爬虫
var cheerio=require('cheerio');
var url='http://www.sina.com.cn/';
var http=require('http');
http.get(url,function (req) {
    var html=''
    req.on('data',function (data) {
        html+=data;
    })
    req.on('end',function () {
        crawlerChapter(html)
    })
}).on('error',function () {
    console.log('爬取页面错误');
})
function crawlerChapter(html) {
    var $=cheerio.load(html);
    var chapter=$('.main-nav').find(".nav-mod-1");
    var data = [];
    chapter.map(function () {
        var index=$(this).index();
        var dataArr={
            index:index,
            text:[]
        }
        var li=$(this).find("li");
        li.map(function () {
            var text=$(this).text().trim();
            dataArr.text.push(text);
        })
        data.push(dataArr)
    })
    console.log(data);
}
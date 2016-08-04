/**
 * Created by john on 2016/3/25.
 */
var cheerio=require('cheerio');
var fs= require("fs");
fs.readFile('fruits.html',function (err,data) {
    if(err) throw err;
    var html=data.toString();
    $=cheerio.load(html);
    var li=$("ul").find("li");
    var fruits=[];
    li.each(function (index,item) {
        fruits.push($(item).text());
    })
    fruits.join(",")
    console.log(fruits)

})

//HTTP小爬虫获取慕课网nodeJS课程章节；
var http=require('http');
var url='http://www.imooc.com/learn/348';
var cheerio=require('cheerio')
function filterChapters(html){
	var $=cheerio.load(html);
	var chapters=$(".chapter")
	/* 所要获取到的目标数组[{
		chapteTitle:"",
		videos:[
			title:"",
			id:""
		]
	}] */
	var courseData=[];
	chapters.each(function(item){
		//每一章节标题；
		var chapteTitle=$(this).find("strong").text();
		//每章节下的视频；
		var videos=$(this).find(".video").children("li");
		//每章节的内容数据；
		var chapteData={
			chapteTitle:chapteTitle,
			videos:[]
		}
		videos.each(function(item){
			var video=$(this).find(".studyvideo");
			var videoTitle=video.text();
			var videoId=video.attr('href').split('/video/')[1];
			chapteData.videos.push({
				title:videoTitle,
				id:videoId
			})
		})
		courseData.push(chapteData)
	})
	return courseData
}
function printCourseInfo(courseData){
	courseData.forEach(function(item){
		var chapte_Title=item.chapteTitle;
		console.log(chapte_Title+'\n');
		item.videos.forEach(function(item){
			console.log('【'+item.id+'】'+item.title+'\n');
		})
	})
}
http.get(url,function(res){
	var html="";
	res.on("data",function(data){
		html+=data;
	})
	res.on("end",function(){
		var courseData=filterChapters(html);
		printCourseInfo(courseData)
	})
}).on("error",function(){
	console.log("获取数据出错！")
})
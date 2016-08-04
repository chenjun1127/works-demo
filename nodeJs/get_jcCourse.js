var http=require('http');
var cheerio=require('cheerio');
var url='http://www.jcpeixun.com/lesson/1512/';
function filterData(html){
	/* var courseData=[{
		chapterTitle:"",
		videosData:{
			videoTitle:title,
			videoId:id,
			videoPrice:price
		}
	}] */
	var $=cheerio.load(html);
	var courseData=[];
	var chapters=$(".list-collapse");
	chapters.each(function(item){
		var chapterTitle=$(this).find(".collapse-head").find("label").text();
		var videos=$(this).find(".listview5").children("li");
		var chaptersData={
			chaptersTitle:chapterTitle,
			videosData:[]
		}
		videos.each(function(item){
			var videoTitle=$(this).find(".ml10").attr('data-lesson-name');
			var videoId=$(this).find(".ml10").attr('data-lesson-id');
			var vadeoPrice=$(this).find(".colblue").text();
			chaptersData.videosData.push({
				title:videoTitle,
				id:videoId,
				price:vadeoPrice
			})
		})
		courseData.push(chaptersData) 
	})
	return courseData
}
function printCourseInfo(courseData){
	courseData.forEach(function(item){
		console.log(item.chaptersTitle+'\n');
		item.videosData.forEach(function(item){
			console.log(item.title+'【'+item.id+'】'+item.price+'\n')
		})
	})
}
http.get(url,function(res){
	html="";
	res.on("data",function(data){
		html+=data
	})
	res.on('end',function(){
		var courseData=filterData(html);
		printCourseInfo(courseData)
	})
})
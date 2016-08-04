var express = require('express')
var bodyParse = require('body-parser')
var path = require('path');
var port = process.env.PORT || 3200
var app = express();
app.set('views', './views/pages');
app.set('view engine', 'jade');
// app.use(express.urlencoded({
//     extended: true
// }));
 
app.use(express.static(path.join(__dirname, 'bower_components')));


app.listen(port)
console.log('app started on ' + port);
 
app.get('/',function(req,res,next){
    console.log(Date.now());
    next();
},function(req,res){
    res.send('hello world')
})
// index page
app.get('/index', function(req, res) {
    res.render('index', {
        title: '网站首页',
        movies: [{
                title: '机械战警',
                _id: 1,
                poster: 'http://pic.hdpic.net/upfile/allimg/160402/1-160402134U3.jpg'
            }, {
                title: '机械战警',
                _id: 2,
                poster: 'http://pic.hdpic.net/upfile/allimg/160402/1-160402134U3.jpg'
            }, {
                title: '机械战警',
                _id: 3,
                poster: 'http://pic.hdpic.net/upfile/allimg/160402/1-160402134U3.jpg'
            }, {
                title: '机械战警',
                _id: 4,
                poster: 'http://pic.hdpic.net/upfile/allimg/160402/1-160402134U3.jpg'
            },{
                title: '机械战警',
                _id: 5,
                poster: 'http://pic.hdpic.net/upfile/allimg/160402/1-160402134U3.jpg'
            }, {
                title: '机械战警',
                _id: 6,
                poster: 'http://pic.hdpic.net/upfile/allimg/160402/1-160402134U3.jpg'
            },

        ]
    })
});
// detail page
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: '详情页',
        movie: {
            doctor: '何塞·帕迪里亚',
            country: "U.S.A",
            title: '机械战警',
            poster: ' ',
            year: 2008,
            language: "英语",
            flash: "http://player.youku.com/player.php/sid/XNzI2MzM4NDM2/v.swf",
            summary: '2028年，专事军火开发的机器人公司Omni Corp.生产了大量装备精良的机械战警，他们被投入到惩治犯罪等行动中，取得显著的效果。罪犯横行的底特律市，嫉恶如仇、正义感十足的警察亚历克斯·墨菲（乔尔·金纳曼 饰）遭到仇家暗算，身体受到毁灭性破坏。'
        }


    })
});

// admin page
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: '后台录入页',
        movie: {
            title: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
    })
});
// list page
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: '列表页',
        movies: [{
            title: '机械战警',
            _id: 1,
            doctor: '何塞·帕迪里亚',
            country: "U.S.A",
            year: 2014,


            language: "英语",
            flash: "http://player.youku.com/player.php/sid/XNzI2MzM4NDM2/v.swf",
            summary: '2028年，专事军火开发的机器人公司Omni Corp.生产了大量装备精良的机械战警，他们被投入到惩治犯罪等行动中，取得显著的效果。罪犯横行的底特律市，嫉恶如仇、正义感十足的警察亚历克斯·墨菲（乔尔·金纳曼 饰）遭到仇家暗算，身体受到毁灭性破坏。'

        }]
    })
});
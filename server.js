var express = require('express');
var bodyparser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var cors = require('cors');

//ejs,views,public 사용
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

//서버구동
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(methodOverride());
app.use(cors());

//데이터베이스 접속
// var mysql = require('mysql');
// var conn = mysql.createConnection({
// 	host:"testdatabase.c3asktw2nxxm.ap-northeast-2.rds.amazonaws.com",
//     user:"root",
//     password:"11131113",
//     database:"mockup"
// })
// conn.connect(function(){
//     console.log("connected database!!")
// });

//이방식으로 라우터를 분리하고자 한다.
var main = require('./router/main')(app);
app.use('/main',main);

var testEjs = require('./router/testEjs')(app);
app.use('/testEjs',testEjs);

//이방식은 사용해본 경험이 적어서 사용하지 않을 예정
var router = require('./router/sub')(app);

app.get('/',function(req,res){
	res.send('health test');
});

app.listen(9000, function(){
    console.log("connected server!!")
});
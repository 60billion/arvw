module.exports = function(app)
{   
   //app 대신 router를 쓰는이유는 url 정돈이 깔끔할거 같아서
   var express = require('express');
   var router = express.Router();

   //기타
   var bodyparser = require('body-parser');
   var logger = require('morgan');
   var methodOverride = require('method-override');
   var cors = require('cors');

   //css 및 정적 파일을 사용하기위해서
   router.use(express.static('public'));

   //mysql접속
    var mysql = require('mysql');
    var conn = mysql.createConnection({
	host:"testdatabase.c3asktw2nxxm.ap-northeast-2.rds.amazonaws.com",
    user:"root",
    password:"11131113",
    database:"arvw"
    })

   router.get('/dbtest',function(req,res){
    
    var sql = `select * from connectTest where id=${1}`;
    conn.query(sql,function(err,rows,feilds){
        if(err) return console.log("failed to connect to db");
        console.log("db is working");
        console.log("rows:"+rows)
        console.log("rows[0]"+rows[0]);
        var data = rows[0];        
        res.render('dbtest.ejs',data);
    });
     });

   return router;
}
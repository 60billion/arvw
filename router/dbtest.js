module.exports = function(app)
{   
   //app 대신 router를 쓰는이유는 url 정돈이 깔끔할거 같아서
   var express = require('express');
   var router = express.Router();
   var AWS = require('aws-sdk');
   AWS.config.region = "ap-northeast-2c";
   //css 및 정적 파일을 사용하기위해서
   router.use(express.static('public'));

   //mysql접속
    var mysql = require('mysql');
    var conn = mysql.createConnection({
	host:"testdatabase.c3asktw2nxxm.ap-northeast-2.rds.amazonaws.com",
    user:"root",
    password:"11131113",
    database:"arvw"
    });

    conn.connect(function(){
      if(err) return err;
        console.log("connected database in dbtest router");
    });

   router.post('/dbtest',function(req,res){
    
    conn.query('SHOW DATABASES',function(err,rows,fields){
        if(err){
            console.log(err);
          }else{
            console.log(rows);
          }
    });
    var sendmsg = {ejs:"ejs Test"};
    res.render('dbtest',sendmsg);

    });

   return router;
};
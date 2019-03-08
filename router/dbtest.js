module.exports = function(app)
{   
   //app 대신 router를 쓰는이유는 url 정돈이 깔끔할거 같아서
   var express = require('express');
   
   var AWS = require('aws-sdk');
   AWS.config.region = "ap-northeast-2c";


   //mysql접속
    var mysql = require('mysql');
    var conn = mysql.createConnection({
	  host:"testdatabase.c3asktw2nxxm.ap-northeast-2.rds.amazonaws.com",
    user:"root",
    password:"11131113",
    database:"public"
    });

    // conn.connect(function(){
    //     console.log("connected database in dbtest router");
    // });

   var router = express.Router();

      //css 및 정적 파일을 사용하기위해서
      router.use(express.static('public'));

   router.post('/dbtest',function(req,res){

    conn.query('SELECT * FROM test;',function(err,rows,fields){
      var sendmsg = {ejs:"ejs Test"};
        if(err){
            console.log(err);
            res.render('dbtest',sendmsg);
          }else{
            console.log(rows);
            res.render('dbtest',sendmsg);
          }
    });
  

    });

   return router;
};
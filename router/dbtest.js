module.exports = function(app)
{   
  var express = require('express');
  var router = express.Router();
  
  var mysql = require('mysql');
  var conn = mysql.createConnection({
    host:"testdatabase.c3asktw2nxxm.ap-northeast-2.rds.amazonaws.com",
      user:"root",
      password:"11131113",
      database:"mockup"
  });

   //css 및 정적 파일을 사용하기위해서
   router.use(express.static('public'));

   router.post('/dbtest',function(req,res){
     conn.query("select * from user;",function(err,rows,fields){
      if(err){
        console.log(err);
      }else{
        console.log(rows);
        res.render('dbtest');
      }
     });
    
   });

   return router;
};
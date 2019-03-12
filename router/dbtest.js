module.exports = function(app)
{   
  var express = require('express');
  var router = express.Router();
  

  //데이터베이스접속방법 sudo mysql -h testdatabase.c3asktw2nxxm.ap-northeast-2.rds.amazonaws.com -u root -p
  var mysql = require('mysql');
  var conn = mysql.createConnection({
    host:"testdatabase.c3asktw2nxxm.ap-northeast-2.rds.amazonaws.com",
      user:"root",
      password:"11131113",
      database:"arvw"
  });

   //css 및 정적 파일을 사용하기위해서
   router.use(express.static('public'));



   //DB테스트 get방식 (post get 방식 이해 부족으로 시간이 걸림...)
   router.get('/dbtest',function(req,res){
     conn.query("select * from category;",function(err,rows,fields){
      if(err){
        console.log(err);
      }else{
        console.log(rows);
        res.render('dbtest',rows);
      }
     });
    
   });

   //DB테스트 post방식 아래 sql문은 잘못된 것임 그냥 테스트만 진행했음.
   router.post('/dbtests',function(req,res){
    conn.query("insert into test (id,name,password,contents) values('3','clone','1212','package');",function(err,rows,fields){
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
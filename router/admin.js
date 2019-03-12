module.exports = function(app)
{     
  var express = require('express');
  var router = express.Router();
  var bodyparser = require('body-parser');
  app.use(bodyparser.json());
  
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

  router.get('/reg',function(req,res){
    res.render('reg');
  });
  router.post('/reg',function(req,res){
    var data = {userName:req.body.userName, category:req.body.category, subCategory:req.body.subCategory};
    console.log(JSON.stringify(data));
    res.render('admin',data);
  });

   return router;
}
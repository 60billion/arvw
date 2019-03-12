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

  router.get('/reg',function(req,res){
    res.render('reg');
  });
  router.post('/reg',function(req,res){
    var userName = req.body.userName;
    var category = req.body.category;
    var subCategory = req.body.subCategory;
    var data = {userName:userName, category:category, subCategory:subCategory};
    res.render('admin',data);
  });

   return router;
}
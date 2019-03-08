module.exports = function(app)
{   
  var express = require('express');
  var bodyparser = require('body-parser');
  var logger = require('morgan');
  var methodOverride = require('method-override');
  var cors = require('cors');

  app.use(logger('dev'));
  app.use(bodyparser.json());
  app.use(methodOverride());
  app.use(cors());

  var mysql = require('mysql');
  var conn = mysql.createConnection({
      host:"testdatabase.c3asktw2nxxm.ap-northeast-2.rds.amazonaws.com",
      user:"root",
      password:"11131113",
      database:"mockup"
  });

  var router = express.Router();

   //css 및 정적 파일을 사용하기위해서
   router.use(express.static('public'));

   router.post('/dbtest',function(req,res){

    conn.query('select * from user;',function(err,rows,fields){
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
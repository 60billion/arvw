module.exports = function(app)
{   
  var express = require('express');
  var router = express.Router();

   //css 및 정적 파일을 사용하기위해서
   router.use(express.static('public'));

   router.get('/dbtest',function(req,res){
    res.render('index.html');
   });

   return router;
};
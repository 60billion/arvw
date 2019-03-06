module.exports = function(app)
{   
   //app 대신 router를 쓰는이유는 url 정돈이 깔끔할거 같아서
   var express = require('express');
   var router = express.Router();

   //css 및 정적 파일을 사용하기위해서
   router.use(express.static('public'));

   router.get('/testEjs',function(req,res){
       var sendmsg = {ejs:"ejs Test"};
        res.render('test.ejs',sendmsg);
     });

   return router;
}
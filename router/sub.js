module.exports = function(app)
{
    
     app.get('/sub/subs',function(req,res){
        res.render('sub.html')
     });

}
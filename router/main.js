var data={count:0};

module.exports = function(app)
{
     app.get('/',function(req,res){
       data.count++;
        res.render('index.ejs',data)
     });
     app.get('/reset',function(req,res){
       data.count=0;
        res.render('index.ejs',data)
     });
     app.get('/set/count',function(req,res){
       if(req.query.count) data.count=req.query.count;
        res.render('index.ejs',data)
     });
     app.get('/set/:num',function(req,res){
       data.count=req.params.num;
       res.render('index.ejs',data)
     });
     app.get('/about',function(req,res){
        res.render('about.ejs',data);
    });
}

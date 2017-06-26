/**
 * Created by quantt on 21/06/2017.
 */
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
/*app.get('/', function(req, res){
    res.send("Hello world!");
});
app.get('/summon', function(req, res){
   res.send("Common, Summon!");
});

//call method
app.get('/hello', function(req, res){
    res.send("Hello World!");
});

app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
});

// method all
app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
});

app.get('/test', function(req, res){
   res.send("Test router use method get");
});

// router
var things = require('./router.js');
// both index.js and things.js should be in same directory
app.use('/things', things);

//param on router
app.get('/things/:name/:id', function(req, res){
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
//parten param on router
app.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
});

//404 not found
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});*/

app.get('/first_template', function(req, res){
    res.render('first_view');
});


app.get('/dynamic_view', function(req, res){
    /*res.render('dynamic', {
        name: "TutorialsPoint",
        url:"http://www.tutorialspoint.com"
    });*/
    res.render('dynamic', {user:
        {name: "Quan", age: "23"}
    });
});

app.listen(3000);
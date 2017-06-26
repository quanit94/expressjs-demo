/**
 * Created by quantt on 21/06/2017.
 */
var express = require('express');
var app = express();

/*
//Middleware function to log request protocol
app.use('/things', function(req, res, next){
    console.log("A request for things received at " + Date.now());
    next();
});

//Route handler that sends the response
app.get('/things', function(req, res){
    res.send('Things');
});
*/


//First middleware before response is sent
app.use(function(req, res, next){
    console.log("Start x");
    next();
});
//Route handler
app.get('/', function(req, res, next){
    res.send("Middle");
    console.log('Run middleware');
    next();
});

app.get('/middleware', function(req, res, next){
    res.send("Middle Test");
    if(req.url)
    next();
});

app.use('/', function(req, res){
    console.log('End');
});

app.listen(3000);
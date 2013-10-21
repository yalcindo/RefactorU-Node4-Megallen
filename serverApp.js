
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//app.get('/users', user.list);
//app.get('/', routes.index);

app.get("/",function(req,res){
	
	res.render('index',{title:"Seville"});
});
app.get("/canary",function(req,res){
	
	res.render('canary',{title:"Canary"});
});
app.get("/cape",function(req,res){
	
	res.render('Cape',{title:"Cape"});
});
app.get("/StraitofMagellan",function(req,res){
	
	res.render('StraitofMagellan',{title:"StraitofMagellan"});
});
app.get("/guam",function(req,res){
	
	res.render('Guam',{title:"Guam"});
});
app.get("/philippines",function(req,res){
	
	res.render('philippines',{title:"Philippines"});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

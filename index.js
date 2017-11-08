var fs = require('fs');
var http = require('http');
//var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hello World!');
	res.end();
});

var server = app.listen(8082,function(){
	console.log('server is running!!!');

});




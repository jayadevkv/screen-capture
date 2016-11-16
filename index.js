var modify = require('./modify.js');

var express = require('express');

var app = express();

app.get('/', function(req, res){

	var screenshot = require('desktop-screenshot');

	var interval = setInterval(function(){

		screenshot(modify.imgPath+'/'+modify.imgPrefix+"screenshot"+Date.now()+".jpg", {width: 400, height: 300, quality: 60}, function(error, complete) {
	    if(error)
	        console.log("Screenshot failed", error);
	    else
	        console.log("Screenshot succeeded");
		});

	},modify.interval*100);

	res.end('Please be patient while we are recording screenshots of your desktop at intervals');

});

app.listen(3000, function(){});
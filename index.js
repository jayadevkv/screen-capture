
var express = require('express');

var app = express();

app.get('/', function(req, res){

	var screenshot = require('desktop-screenshot');

	var path = 'screenshots/';

	var interval = setInterval(function(){

		screenshot(path+"screenshot"+Date.now()+".jpg", {width: 400, height: 300, quality: 60}, function(error, complete) {
	    if(error)
	        console.log("Screenshot failed", error);
	    else
	        console.log("Screenshot succeeded");
		});

	},60000);

	res.end('We are recording screenshots of your desktop at intervals');

});

app.listen(3000, function(){});
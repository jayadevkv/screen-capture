var modify = require('./modify.js');

var express = require('express');

var app = express();

var fs  = require('fs');

app.get('/', function(req, res){

	var screenshot = require('desktop-screenshot');

	var interval = setInterval(function(){

		screenshot(modify.imgPath+'/'+modify.imgPrefix+"screenshot"+Date.now()+".jpg", {width: 900, height: 620, quality: 60}, function(error, complete) {
	    if(error)
	        console.log("Screenshot failed", error);
	    else
	        console.log("Screenshot succeeded");
		});

	},modify.interval*1000);

	if(modify.clearInterval!='')
	{

		var clearImages = setInterval(function(){

			fs.readdir('./'+modify.imgPath, function(error, files){
				files.forEach(function(file){
					fs.unlinkSync('./'+modify.imgPath+'/'+file);
				});
			});


		},modify.clearInterval*1000+10);
	}

	res.end('Please be patient while we are recording screenshots of your desktop at intervals');

});

app.listen(3000, function(){});
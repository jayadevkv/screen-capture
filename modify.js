//specify the interval time in seconds 
var interval = 60;

//specify the path to which screenshots are to be stored
var imgPath = 'screenshots';

//specify any prefix for the image if needed, preferably with a trailing underscore.Else leave it blank
var imgPrefix = 'screen_';

//specify interval in seconds to clear the screenshots folder.Leave it blank if no need for reset
var clearInterval = 60*3;



exports.interval = interval;

exports.imgPath = imgPath;

exports.imgPrefix = imgPrefix;

exports.clearInterval = clearInterval;

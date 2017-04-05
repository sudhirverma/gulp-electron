var app = require('app'),
    BrowserWindow = require('browser-window');

app.on('ready', function(){
  var myWindow = new BrowserWindow({width: 800, height: 500});
  myWindow.loadUrl('file://' + __dirname + "/../browser/index.html");
});

var Express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = new Express();
var server = new http.Server(app);
app.use(Express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
app.use(logger('dev'));
app.get('/index', function(request, response){
  response.render('index');
});

var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'production';
var host = "localhost";

server.listen(port, function(por, err) {
  if(err){
    return console.error(err);
  }
  console.info(`Server running on http://${host}:${port} [${env}]`);

});

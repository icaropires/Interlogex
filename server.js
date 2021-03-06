var Express = require('express');
var Mailer = require('express-mailer');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');

app = new Express();
var server = new http.Server(app);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(Express.static(path.join(__dirname, 'public')));
app.use(Express.static(path.join(__dirname, 'public','assets')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
app.use(logger('dev'));
Mailer.extend(app, {
  from: 'interlogex@interlogex.com.br',
  host: 'smtp.zoho.com',
  secureConnection: true,
  port: 465,
  transportMethod: 'SMTP',
  auth: { 
    user: 'interlogex@interlogex.com.br',
    pass: process.env.PSWIGX
  }
});
app.post('/contato', function(request, response, next){
  var message = "";
  app.mailer.send('email',{
    from: request.body.email,
    to: 'interlogex@interlogex.com.br',
    subject: `Contato: ${request.body.subject}`,
    title: request.body.subject,
    name: request.body.name,
    body: request.body.body,
    phone: request.body.phone,
    email: request.body.email,
  }, function(err, message) {
    if(err) {
      console.error(err);
    } else {
       console.log('Email sent');
       message += "Enviado para Zoho\n";
       //response.send("Email Delivered");
       //response.send(message);
    }
  });
  app.mailer.send('noreply',{
    to: request.body.email,
    subject: 'Obrigado pelo contato',
    name: request.body.name,
    attachments: [{
      fileName: "logo2.png",
      filePath: "./public/imagem/logo2.png",
      cid: 'logo',
      }]
  }, function(err, message) {
    if(err) {
      console.error(err); 
    } else {
       console.log('Email sent'); 
       message += "Enviado no-reply\n";
       //response.send("Email Delivered");
    }
});
  response.send(message);
});
app.get('*', function(request, response, next){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));

});

var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'production';
var host = "0.0.0.0";

server.listen(port, function(por, err) {
  if(err){
    return console.error(err);
  }
  console.info(`Server running on http://${host}:${port} [${env}]`);

});

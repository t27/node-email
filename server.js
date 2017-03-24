var nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://'+process.env.SMTP_LOGIN+':'+process.env.SMTP_PASSW+'@smtp.mailgun.org');
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Simple in-memory datastore
if(!process.env.TEST_RECIPIENT || !process.env.TEST_SENDER || !process.env.SMTP_LOGIN || !process.env.SMTP_PASSW){
  var comments = [
      {
          "id": 1388534400000,
          "author": "You need to set details in .env for this example to work",
          "text": ""
      }  
  ];
} else {
  var comments = [
      {
          "id": 1388534400000,
          "author": "None yet",
          "text": ""
      }  
  ];
}

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/comments', function(req, res) {
  res.send(comments);
});





app.listen(app.get('port'), function() {
  console.log('Server started on: ' + app.get('port'));
});
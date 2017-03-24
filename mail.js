var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: process.env.SMTP_LOGIN,
    pass: process.env.SMTP_PASSW
  }
});


var sendMail = function(fromName, fromEmail, toEmail, subject, text, attachmentName, attachmentPath, callback) {
  // setup e-mail data
  var mailOptions = {
      from: '"'+fromName+'" <'+fromEmail+'>', // sender address
      to: toEmail, // list of receivers
      subject: subject, // Subject line
      text: text, // plaintext body
      html: '<b>'+text+'</b>', // html body
      attachments:[{
        filename: attachmentName,
        content: attachmentPath
      }]
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      callback(error,info);
  });

}

exports.sendMail = sendMail;
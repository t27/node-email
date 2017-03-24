# Nodemailer example app modified for sendgrid

An example app that sends an email from a form created with React. It demonstrates use of [Nodemailer](https://github.com/nodemailer/nodemailer) for sending emails in Node.js and uses [Mailgun](https://mailgun.com).

## Getting Started
Set the following details in `.env` for the app to send mail:
- SMTP_LOGIN=signup@mailgun.com
- SMTP_PASSW=getYourPasswordFromMailgun
- TEST_RECIPIENT=confirmedRecipientMailbox@youHaveAccessTo.com
- TEST_SENDER=anotherMailbox@youHaveAccessTo.com
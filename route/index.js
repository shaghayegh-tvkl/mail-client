
const express = require("express")
const app = express()
const mailController = require('../controller/mailController');

app.post('/login',mailController.login);
app.get('/showInbox',mailController.showInbox);
app.post('/sendEmail',mailController.sendEmail);
app.get('/getSentItems',mailController.getSentItems);
module.exports = app
console.log('here')



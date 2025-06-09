require('dotenv').config({ path: './.env' });
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chatbotRouter = require('./routes/chatbot');
var contactRouter = require('./routes/contact');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/chatbot', chatbotRouter);
app.use('/api/contact', contactRouter);

// Route to serve the CV file
app.get('/api/download-cv', (req, res) => {
  const cvPath = path.join(__dirname, 'data', 'AkshatNigamm.pdf');
  res.download(cvPath, 'AkshatNigamm.pdf', (err) => {
    if (err) {
      console.error('Error downloading CV:', err);
      res.status(500).send('Could not download the CV.');
    }
  });
});

module.exports = app;

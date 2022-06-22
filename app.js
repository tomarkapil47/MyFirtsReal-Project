var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios = require('axios');
const dotenv = require('dotenv').config();
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// //////////////////////////////////////////////////////////////////////
const mongoose = require('mongoose');

var app = express();
const db_url = process.env.DB_CONNECT;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./public/images'));
app.use('/api', indexRouter);
// app.use('/user', usersRouter);

app.get('/redirect/sap-url', async (req, res, next) => {
  try {
    axios
      .get('https://api.cf.us10.hana.ondemand.com')
      .then((response) => {
        console.log(response.data);
        return res.status(200).json({
          res: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
  }
});

mongoose
  .connect(db_url)
  .then(() => console.log('Connected to Database.'))
  .catch((err) => {
    console.log('err while connecting to database.', err);
  });

module.exports = app;

/*============================================
; Title: Assignment 1.4
; Author: Peter Itskovich
; Date: 8 July 2020
; Modified By: Darius Dinkins
; Description: API Setup
===========================================
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
mongoose.Promise = require("bluebird");

/* Database connection */

mongoose.connect('mongodb+srv://admin:admin@cluster0.vupgp.mongodb.net/api-gateway?authSource=admin&replicaSet=atlas-4j8iwd-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', 
  {
  promiseLibrary: require('bluebird')
  }).then ( () => console.log('connection successful'))
  .catch( (err) => console.error(err));


//var usersRouter = require('./routes/users');  <--removed references to "user"

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter); <--removed references to "user"

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

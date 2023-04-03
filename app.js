var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//load environment variables from .env (.env is the default file)

const cors = require('cors');

require("dotenv").config();

//look in our .env file for PORT, if it's not there, default to 5002.
const PORT = process.env.PORT || 5002;

var { mongoConnect } = require('./mongo.js');
mongoConnect();

//register routes.
//NOTE: notice how there is .js after index, this is because
// we exported the module as index.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//add CORS middleware 
app.use(cors());
app.options("*", cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

//only do this if you don't have a /bin directory
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

module.exports = app;

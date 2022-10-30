var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));






var con = mysql.createConnection({
  host: "localhost",
  user: "lamvan",
  password: "LamVan123",
  database: "financialapp"
});




app.get('/username',(req,res)=>{
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "Select * from users";
    con.query(sql, function (err, result) {
      res.send(result)
    });
  });

})

app.post('/addUser', (req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var password = req.body.number;
    con.connect(function(err){
      var sql = `INSERT INTO financialapp.usersinformation(userInfoID,firstName,lastName,email) VALUES (${username},${password},${number},);`
    })
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("This is authenticuser-")
  // })
})




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

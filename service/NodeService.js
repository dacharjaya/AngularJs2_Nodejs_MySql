console.log("Hello world!");
var express = require('express');
var app = express();
var session = require('express-session');
var db = require("./DataConnection");

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.listen(3002);

var orderDao = require('../dao/OrderDAO');
app.get('/orderList', orderDao.list);
app.get('/orderList/:won', orderDao.list);




var koa = require('koa');
var app = koa();
var static = require('koa-static');
var config = require('./config');

app.use(static('static'));

app.listen(4000);
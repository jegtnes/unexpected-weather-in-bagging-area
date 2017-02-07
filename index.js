var koa = require('koa');
var app = koa();
var config = require('./config');

app.use(function *() {
  this.body = 'hello darkness, my old friend';
});

app.listen(4000);
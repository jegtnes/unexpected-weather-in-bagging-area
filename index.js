var koa = require('koa');
var app = koa();

app.use(function *() {
  this.body = 'hello darkness, my old friend';
});

app.listen(4000);
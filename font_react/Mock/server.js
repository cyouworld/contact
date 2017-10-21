const koa = require('koa');
const app = new koa();

var router = require('koa-router')();
// response
const jsonObj_one = [{"id":"1",title: "水浒传","content":"话说宋江等人。。。。。。。"},{"id":"2",title: "水浒传","content":"话说宋江等人。。。。。。。"}];
// const jsonObj_one = {"id":"1",title: "水浒传","content":"话说贾宝玉等人。。。。。。。"};
const jsonObj_two = [{"id":"3",title: "红楼梦","content":"话说贾宝玉等人。。。。。。。"}];

router.get('/api/read/1',function(ctx) {
	ctx.body = jsonObj_one;
});
router.get('/api/read/2',function(ctx) {
	ctx.body = jsonObj_two;
});

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);
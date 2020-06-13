const Koa = require('koa')
const routes = require('./api')

const app = new Koa()
app.use(routes)

app.listen(3000, () => console.log('server runing'))

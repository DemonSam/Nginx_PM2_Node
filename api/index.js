
const Router = require('koa-router')

const router = new Router()

router.get('/', (ctx, next) => {
    ctx.body = {
        code: 1,
        msg: 'success'
    }
})

module.exports = router.routes()
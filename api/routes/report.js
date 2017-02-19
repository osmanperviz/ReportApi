import Router from 'koa-router'
const router = new Router({ prefix: '/report' })

router.get('/', async (ctx, next) => {
  ctx.body = 'Some Reports'
})

export default router

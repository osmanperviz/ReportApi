import Router from 'koa-router'
const router = new Router({ prefix: '/report' })
import db from '../../db'

import Report from '../../models/report'

router.get('/', async (ctx, next) => {

  var report = await Report.where({}).fetchAll()

  ctx.body = report
})

export default router

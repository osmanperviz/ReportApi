import Router from 'koa-router'
const router = new Router({ prefix: '/report' })
import db from '../../db'

import Report from '../../models/report'

router.get('/', async (ctx, next) => {
  const reports = await Report.where({}).fetchAll()
  ctx.body = reports
})

router.get('/:id', async (ctx, next) => {
  try {
    const report = await Report.where({ id: ctx.params.id }).fetch()
    if (!report) {
      ctx.throw(404)
    }
    ctx.body = {
      report
    }
  } catch (err) {
    ctx.throw(err.status)
  }
})

export default router

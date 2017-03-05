import Router from 'koa-router'
const router = new Router({ prefix: '/reports' })
import db from '../../db'

import Report from '../../models/report'

router.get('/', async (ctx, next) => {
  const reports = await Report.where({}).fetchAll()
  ctx.body = reports
})

router.get('/:id', async (ctx, next) => {
  try {
    const report = await Report.where({ id: ctx.params.id }).fetch()

    if (!report) { ctx.throw(404) }
    ctx.body = { report }

  } catch (err) {
    ctx.throw(err.status)
  }
})

router.post('/', async (ctx, next) => {
  const report = new Report(ctx.request.body.report)
  try {
    await report.save()
    ctx.body = { report }

  } catch (err) {
    ctx.throw(422, err.message)
  }
})

export default router

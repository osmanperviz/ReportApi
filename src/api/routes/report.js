import Router from 'koa-router'
import db from '../../db'
const router = new Router({ prefix: '/reports' })


import Report from '../../models/report'
import EmailNotificationService from '../../services/EmailNotificationService'

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
  debugger;
  const obj = Object.assign({}, ...ctx.request.body._parts.map(([ key, value ]) => ({ [key]: value })));
  const report = new Report(obj)
  try {
    await report.save()
    // send notification to Admin
    // EmailNotificationService.notify(report.administrativeCentar)
    ctx.body = { report }

  } catch (err) {
    ctx.throw(422, err.data)
  }
})

export default router

import combineRouters from 'koa-combine-routers'
import reportRoutes from './routes/report'

const routes = combineRouters([
  reportRoutes
])
export default routes

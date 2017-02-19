import Koa from 'koa';
import config from './config';
import middleware from '../middleware'
import routes from '../api'

const app = new Koa()
  .use(middleware())
  .use(routes)
  console.log(app);
export default app

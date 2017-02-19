import Koa from 'koa';
import config from './config';
import middleware from '../middleware'

const app = new Koa()
  .use(middleware())
  .use(async (ctx) => {
    console.log(ctx)
     ctx.body = 'Hello!!!'
});

export default app

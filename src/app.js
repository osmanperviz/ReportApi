import Koa from 'koa';
import config from './config';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';
import logger from 'koa-logger'
import middleware from 'koa-router';
const router = middleware();


const app = new Koa()
  .use(cors())
  .use(bodyParser())
  .use(logger())
  .use(async (ctx) => {
     ctx.body = 'Hello!!!s'
});

export default app

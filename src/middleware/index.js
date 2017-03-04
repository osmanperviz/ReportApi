'use strict';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';
import logger from 'koa-logger'
import compose from 'koa-compose';
import convert from 'koa-convert';

import errorHandeling from './handle-error'

export default function () {
  return compose([
    convert(cors()),
    convert(bodyParser()),
    convert(logger()),
    errorHandeling(),
  ])
}

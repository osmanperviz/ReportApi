import Bookshelf from 'bookshelf';
import dbConfig from '../../knexfile';

var database;
if (process.env.NODE_ENV == 'production') {
  database = dbConfig.production;
} else {
  database = dbConfig.development;
}

const knex = require('knex')(database);
const bookshelf = Bookshelf(knex);

export default bookshelf

import Bookshelf from 'bookshelf';
import dbConfig from '../../knexfile';
import validator from 'validator'

var database;
if (process.env.NODE_ENV == 'production') {
  database = dbConfig.production;
} else {
  database = dbConfig.development;
}

const knex = require('knex')(database);
const bookshelf = Bookshelf(knex);

const config = {
  validator: require('validator'), // node-validator
  validateOnSave: false // Automatically validate when Bookshelf emits 'saving' event
}

bookshelf.plugin('bookshelf-validate', {
 validator: validator,
 validateOnSave: true
});

export default bookshelf

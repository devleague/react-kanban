const knex = require('../knex');
const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');
module.exports = bookshelf;
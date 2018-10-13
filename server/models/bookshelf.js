const knex = require('../db/knex');
module.exports = require('bookshelf')(knex);
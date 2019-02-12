const config = require('../knexfile');
const environment = process.env.NODE_ENV || 'development';
module.exports = require('knex')(config[environment]);
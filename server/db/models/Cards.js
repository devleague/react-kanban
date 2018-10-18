const bookshelf = require('./bookshelf');

const Cards = bookshelf.Model.extend({
    tableName: 'cards',
    idAttribute: 'id',
    hasTimestamps: true
})

module.exports = Cards
const bookshelf = require('./bookshelf');

const CardModel = bookshelf.Model.extend({
    tableName: 'cards_table',
    idAttribute: 'card_id',   
    hasTimestamps: true    
});

module.exports = CardModel;
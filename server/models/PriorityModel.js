const bookshelf = require('./bookshelf');

const PriorityModel = bookshelf.Model.extend({
    tableName: 'priorities_table',
    idAttribute: 'priorities_id',   
    hasTimestamps: true    
});

module.exports = PriorityModel;
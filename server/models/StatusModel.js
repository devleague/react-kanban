const bookshelf = require('./bookshelf');

const StatusModel = bookshelf.Model.extend({
    tableName: 'statuses_table',
    idAttribute: 'statuses_id',   
    hasTimestamps: true    
});

module.exports = StatusModel;
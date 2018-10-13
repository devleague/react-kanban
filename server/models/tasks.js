const bookshelf = require('./bookshelf');

const Users = bookshelf.Model.extend({
    tableName: 'react_kanban',
    idAttribute: 'id',   
    hasTimestamps: true    
});

module.exports = Users;
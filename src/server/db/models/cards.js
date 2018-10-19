const bookshelf = require('./bookshelf');
const Priority = require('./priorities')
const Status = require('./statuses')
const User = require('./users')

const Card = bookshelf.Model.extend({
    tableName: 'cards',
    idAttribute: 'id',
    hasTimestamps: true,
    priority: function() {
        return this.hasOne(Priority)
    },
    status: function() {
        return this.hasOne(Status);
    },
    createdBy: function() {
        return this.hasOne(User);
    },
    assignedTo: function() {
        return this.hasOne(User);
    }
});

module.exports = Card;
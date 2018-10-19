const bookshelf = require('./bookshelf');
const Card = require('./cards');

const Status = bookshelf.Model.extend({
    tableName: 'statuses',
    idAttribute: 'id',
    hasTimestamps: true,
    card: function() {
        return this.belongsToMany(Card)
    }
});

module.exports = Status;
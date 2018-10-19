const bookshelf = require('./bookshelf');
const Card = require('./cards');

const Priority = bookshelf.Model.extend({
    tableName: 'priorities',
    idAttribute: 'id',
    hasTimestamps: true,
    card: function() {
        return this.belongsToMany(Card)
    }
});

module.exports = Priority;
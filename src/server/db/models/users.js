const bookshelf = require('./bookshelf');
const Card = require('./cards');

const User = bookshelf.Model.extend({
    tableName: 'users',
    idAttribute: 'id',
    hasTimestamps: true,
    card: function() {
        return this.belongsToMany(Card)
    }
});

module.exports = User;
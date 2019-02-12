const bookshelf = require('./bookshelf');

let User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimeStamps: true,
  createdCards: function () {
    return this.hasMany(Card, 'created_by');
  },
  assignedCards: function () {
    return this.hasMany(Card, 'assigned_to');
  }
});

module.exports = bookshelf.model('User', User);
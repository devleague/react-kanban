const bookshelf = require('./bookshelf');

let Priority = bookshelf.Model.extend({
  tableName: 'priorities',
  hasTimeStamps: true,
  cards: function () {
    return this.hasMany(Card);
  }
});

module.exports = bookshelf.model('Priority', Priority);
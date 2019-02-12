const bookshelf = require('./bookshelf');

let Status = bookshelf.Model.extend({
  tableName: 'statuses',
  hasTimeStamps: true,
  cards: function () {
    return this.hasMany(Card);
  }
});

module.exports = bookshelf.model('Status', Status);
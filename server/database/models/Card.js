const bookshelf = require('./bookshelf');

let Card = bookshelf.Model.extend({
  tableName: 'cards',
  hasTimeStamps: true,
  assignedUser: function () {
    return this.belongsTo(User, 'assigned_to');
  },
  createdByUser: function () {
    return this.belongsTo(User, 'created_by');
  },
  status: function () {
    return this.belongsTo(Status);
  },
  priority: function () {
    return this.belongsTo(User);
  },
});

module.exports = bookshelf.model('Card', Card);
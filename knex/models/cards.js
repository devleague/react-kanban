const bookshelf = require('./bookshelf');
const priorities = require("./priorities.js");
const statuses = require("./statuses.js");
const users = require("./users.js");

const cards = bookshelf.Model.extend({
  tableName: 'cards',
  priority_id: function () {
    return this.belongsTo(priorities, "priority_id");
  },
  status_id: function () {
    return this.belongsTo(statuses, "status_id");
  },
  created_by: function () {
    return this.belongsTo(users, "created_by");
  },
  assigned_to: function () {
    return this.belongsTo(users, "assigned_to");
  },
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = cards
const bookshelf = require('./bookshelf');
const UserModel = require('./UserModel.js');
const StatusModel = require('./StatusModel.js');
const PriorityModel = require('./PriorityModel.js');


const CardModel = bookshelf.Model.extend({
    tableName: 'cards_table',
    priority_id: function () {
        return this.belongsTo(PriorityModel, "priorities_id");
      },
      status_id: function () {
        return this.belongsTo(StatusModel, "statuses_id");
      },
      created_by: function () {
        return this.belongsTo(UserModel, "created_by");
      },
      assigned_to: function () {
        return this.belongsTo(UserModel, "assigned_to");
      },
    idAttribute: 'card_id',   
    // idAttribute: 'created_by',   

    hasTimestamps: true,
    // createdByUser: function() { return UserModel, "first_name" },    

});

// CardModel.where({id: 1}).fetch({withRelated: ['user_id']}).then(function(book) {
//     console.log(JSON.stringify(book.related('first_name')));
// });

module.exports = CardModel;
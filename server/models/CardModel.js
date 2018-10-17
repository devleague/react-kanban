const bookshelf = require('./bookshelf');
const UserModel = require('./UserModel.js');


const CardModel = bookshelf.Model.extend({
    tableName: 'cards_table',
    createdByUser: function() {
        return this.belongsTo(UserModel.tableName('users_table').idAttribute('user_id'));
    },
    // createdByUser: function() { return UserModel, "first_name" },
    // createdByUser: function(){
    //     return this.belongsTo(UserModel.tableName('users_table').idAttribute('first_name'))
    // },
    // assignedToUser: function(){
    //     return this.belongsTo(UserModel.tableName('users_table').idAttribute('first_name'))
    // },
    idAttribute: 'card_id',   
    // idAttribute: 'created_by',   

    hasTimestamps: true,
    // createdByUser: function() { return UserModel, "first_name" },    

});

// CardModel.where({id: 1}).fetch({withRelated: ['user_id']}).then(function(book) {
//     console.log(JSON.stringify(book.related('first_name')));
// });

module.exports = CardModel;
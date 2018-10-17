const bookshelf = require('./bookshelf');
const UserModel = require('./UserModel.js');


const CardModel = bookshelf.Model.extend({
    tableName: 'cards_table',
    created_by: function(){
        return this.belongsTo(UserModel.tableName('users_table').idAttribute('user_id'))
    },
    idAttribute: 'card_id',   
    // idAttribute: 'created_by',   

    hasTimestamps: true,
    // created_by: function() { return UserModel, "first_name" },    

});

// CardModel.where({id: 1}).fetch({withRelated: ['user_id']}).then(function(book) {
//     console.log(JSON.stringify(book.related('first_name')));
// });

module.exports = CardModel;
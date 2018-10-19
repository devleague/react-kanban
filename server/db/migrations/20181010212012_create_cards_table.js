
exports.up = function (knex, Promise) {
    return knex.schema.createTable('cards', (table) => {
        table.increments();
        table.string('title').notNullable();
        table.string('priorityId').notNullable();
        table.string('assigned_by').notNullable();
        table.string('user').notNullable();
        table.string('statusId').notNullable();


    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('cards')
};

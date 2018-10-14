
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cards', function(table) {
        table.increments('id').notNullable();
        table.string('title').notNullable();
        table.string('body').notNullable();
        table.integer('priority_id').references('id').inTable('priorities');
        table.integer('status_id').references('id').inTable('statuses');
        table.integer('created_by').references('id').inTable('users');
        table.integer('assigned_to').references('id').inTable('users');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cards');
};

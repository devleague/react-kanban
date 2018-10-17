
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cards', (table) => {
        table.increments();
        table.string('title').notNullable();
        table.string('body').charset(1024).notNullable();
        // Priority foreign key from Priorities table
        table.foreign('priority_id').references('priorities.priority_id');
        // Status foreign key from Statuses table
        table.foreign('status_id').references('statuses.status_id');
        // Created_by foreign key from Users table
        table.foreign('created_by').references('users.users_id');
        // Assigne_to foreign key from Users table
        table.foreign('assigned_to').references('users.users_id');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cards')
};

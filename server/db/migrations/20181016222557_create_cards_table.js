
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cards', (table) => {
        table.increments();
        table.string('title').notNullable();
        table.string('body', 1024).notNullable();
        table.integer('priority_id').unsigned().notNullable();
        table.integer('status_id').unsigned().notNullable();
        table.integer('created_by').unsigned().notNullable();
        table.integer('assigned_to').unsigned().notNullable();
        table.boolean('is_deleted').notNullable().defaultTo(false);
        // Priority foreign key from Priorities table
        table.foreign('priority_id').references('id').inTable('priorities');
        // Status foreign key from Statuses table
        table.foreign('status_id').references('id').inTable('statuses');
        // Created_by foreign key from Users table
        table.foreign('created_by').references('id').inTable('users');
        // Assigne_to foreign key from Users table
        table.foreign('assigned_to').references('id').inTable('users');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cards')
};

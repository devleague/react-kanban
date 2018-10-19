exports.up = function (knex, Promise) {
  return knex.schema.createTable('cards', function (table) {
    table.increments();
    table.string('title', 255).notNullable();
    table.string('body', 1024).notNullable();
    table.integer('priority_id').unsigned().notNullable();
    table.foreign('priority_id').references('id').inTable('priorities');
    table.integer('status_id').unsigned().notNullable();
    table.foreign('status_id').references('id').inTable('statuses');
    table.integer('created_by').unsigned().notNullable();
    table.foreign('created_by').references('id').inTable('users');
    table.integer('assigned_to').unsigned().nullable();
    table.foreign('assigned_to').references('id').inTable('users');
    table.boolean('is_deleted').notNullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cards');
}

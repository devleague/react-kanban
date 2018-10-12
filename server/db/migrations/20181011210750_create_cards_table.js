exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table) {
    table.increments();
    table.string('title').notNullable();
    table.string('body').notNullable();
    table.integer('priority_id').references('id').inTable('users');
    table.integer('status_id').references('id').inTable('users');
    table.integer('created_by').references('id').inTable('users');
    table.integer('assigned_to').references('id').inTable('users');
    table.boolean('is_complete').notNullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
}
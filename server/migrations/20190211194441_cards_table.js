exports.up = function (knex, Promise) {
  return knex.schema.createTable('cards', function (t) {
    t.increments().primary();
    t.string('title', 255).notNullable();
    t.string('body', 1024).notNullable();
    t.integer('priority_id').references('id').inTable('priorities');
    t.integer('status_id').references('id').inTable('statuses');
    t.integer('created_by').references('id').inTable('users');
    t.integer('assigned_to').references('id').inTable('users');
    t.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cards');
};
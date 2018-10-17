
exports.up = function(knex, Promise) {
    return knex.schema.createTable('priorities', (table) => {
        table.integer('priority_id').increments();
        table.string('name').notNullable();
        table.integer('rank').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('priorities')
};

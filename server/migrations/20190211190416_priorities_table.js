exports.up = function (knex, Promise) {
  return knex.schema.createTable('priorities', function (t) {
    t.increments().primary();
    t.string('name').notNullable();
    t.integer('rank').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('priorites');
};
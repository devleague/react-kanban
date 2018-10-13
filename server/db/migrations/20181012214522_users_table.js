exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_table', function(table) {
      table.increments('user_id').unique().notNullable();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_table');
  }
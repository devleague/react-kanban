exports.up = function(knex, Promise) {
    return knex.schema.createTable('cards_table', function(table) {
        table.increments('card_id').unique().notNullable();
        table.string('title', 255).notNullable();
        table.string('body', 1024).notNullable();

        table
        .integer('priority_id').notNullable()
        .references('priorities_id')
        .inTable('priorities_table');

        table
        .integer('status_id').notNullable()
        .references('statuses_id')
        .inTable('statuses_table');

        table
        .integer('created_by').notNullable()
        .references('user_id')
        .inTable('users_table');

        table
        .integer('assigned_to')
        .references('user_id')
        .inTable('users_table');

      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cards_table');
  };
  
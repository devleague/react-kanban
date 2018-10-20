exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('user_id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable();
        table.timestamps(true, true);
      })
      .createTable('priority', table => {
          table.increments('priority_id').primary();
          table.string('name').notNullable();
          table.integer('rank').notNullable();
          table.timestamps(true, true);
      })
      .createTable('status', table => {
        table.increments('status_id').primary();
        table.string('name').notNullable();
        table.integer('rank').notNullable();
        table.timestamps(true, true);
    })
      .createTable('cards', table => {
        table.increments('card_id').primary();
        table.string('title', 255).notNullable();
        table.string('body', 1024).notNullable();
        table.integer('priority_id').references('priority_id').inTable('priority').onDelete('cascade');
        table.integer('status_id').references('status_id').inTable('status').onDelete('cascade');
        table.integer('assigned_to').references('user_id').inTable('users').onDelete('cascade');
        table.integer('created_by').references('user_id').inTable('users').onDelete('cascade');
        table.timestamps(true, true);
      })
  };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cards')
    .dropTable('users')
    .dropTable('priority')
    .dropTable('status');
};

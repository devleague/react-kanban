///// This file is corrupt ///////

exports.up = function(knex, Promise) {
    return knex.schema.createTable('items', (table) => {
      table.increments();
      table.string('description').notNullable();
      table.string('priority').notNullable();
      table.string('by').notNullable();
      table.integer('to').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())      
    }) 
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('items')
  };
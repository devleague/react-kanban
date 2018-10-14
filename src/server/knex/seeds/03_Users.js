exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {first_name: 'Doodlebob', last_name: 'Spoodlebob', email: 'provolonebandit@somerandomemail.com'}
        ]);
      });
  };
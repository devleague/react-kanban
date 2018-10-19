
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Wymin',
          last_name: 'Chan',
          email: 'wymin@email.com'
        },
        {
          first_name: 'Amy',
          last_name: 'Paul',
          email: 'amy@email.com'
        },
        {
          first_name: 'Alvin',
          last_name: 'Oshiro',
          email: 'alvin@email.com'
        },
        {
          first_name: 'Amberly',
          last_name: 'Strelpsata',
          email: 'amberly@email.com'
        }
      ]);
    });
};

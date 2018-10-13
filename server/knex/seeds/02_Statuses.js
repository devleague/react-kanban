exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('statuses').del()
      .then(function () {
        // Inserts seed entries
        return knex('statuses').insert([
          {name: 'To Do', rank: 1},
          {name: 'Doing', rank: 2},
          {name: 'Done', rank: 3}
        ]);
      });
  };
  
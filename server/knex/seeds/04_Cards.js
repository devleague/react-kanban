exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('cards').del()
      .then(function () {
        // Inserts seed entries
        return knex('cards').insert([
          {title: 'Eat Fud', body: 'CUZ IM HUNGRY', priority_id: 1, status_id: 1, created_by: 1, assigned_to: 1}
        ]);
      });
  };
  
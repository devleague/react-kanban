exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('cards').del()
      .then(function () {
        // Inserts seed entries
        return knex('cards').insert([
          {title: 'Eat Fud', body: 'CUZ IM HUNGRY', priority_id: 1, status_id: 1, created_by: 1, assigned_to: 1},
          {title: 'Chase Dat Paper', body: 'CUZ IM POOR', priority_id: 2, status_id: 2, created_by: 1, assigned_to: 1},
          {title: 'Kanak', body: 'CUZ IM TIRED', priority_id: 3, status_id: 3, created_by: 1, assigned_to: 1}
        ]);
      });
  };
  
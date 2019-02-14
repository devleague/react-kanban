
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([
        { id: 1, name: 'Queue', rank: '1' },
        { id: 2, name: 'In-Progress', rank: '2' },
        { id: 3, name: 'Done', rank: '3' },
      ]);
    });
};

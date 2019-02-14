
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        { id: 1, name: 'Low', rank: '4' },
        { id: 2, name: 'Medium', rank: '3' },
        { id: 3, name: 'High', rank: '2' },
        { id: 4, name: 'Blocker', rank: '1' },
      ]);
    });
};

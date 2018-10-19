
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        {
          name: 'Low',
          rank: 3
        },
        {
          name: 'Medium',
          rank: 2
        },
        {
          name: 'High',
          rank: 1
        }
      ]);
    });
};

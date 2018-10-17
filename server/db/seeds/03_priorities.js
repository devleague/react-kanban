
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        {
          name: "low",
          rank: 1
        },
        {
          name: "medium", 
          rank: 2
        },
        {
          name: "high", 
          rank: 3
        }

      ]);
    });
};

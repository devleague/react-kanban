
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([
        {
          name: "In Queue",
          rank: 1
        },
        {
          name: "In Progress",
          rank: 2,
        },
        {
          name: "Done",
          rank: 3
        }
      ]);
    });
};

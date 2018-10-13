exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses_table').insert([
        { statuses_id: 10,
          name: "Queue", 
          rank: 1 
        },
        { statuses_id: 50,
          name: "In Progress", 
          rank: 2 
        },
        { statuses_id: 90,
          name: "Done", 
          rank: 3 
        }
      ]);
    });
};
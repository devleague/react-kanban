exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities_table').insert([
        { priorities_id: 111,
          name: "Low", 
          rank: 1 
        },
        { priorities_id: 555,
          name: "Medium", 
          rank: 2 
        },
        { priorities_id: 999,
          name: "High", 
          rank: 3 
        }
      ]);
    });
};
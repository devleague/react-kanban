
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          title: "Stop Procrastinating",
          body: "Stop being so lazy and get things done!",
          priority_id: 1,
          status_id: 3,
          created_by: 2,
          assigned_to: 3
        },
        {
          title: "Do Work!",
          body: "Get work done!",
          priority_id: 2,
          status_id: 3,
          created_by: 1,
          assigned_to: 2
        },
        {
          title: "Get Stuff Done", 
          body: "Get off your buns and get stuff done!",
          priority_id: 3,
          status_id: 2,
          created_by: 3,
          assigned_to: 1
        },
        {
          title: "Please Eat", 
          body: "Get your pan out and cook something",
          priority_id: 3,
          status_id: 3,
          created_by: 1,
          assigned_to: 3 
        }

      ]);
    });
};

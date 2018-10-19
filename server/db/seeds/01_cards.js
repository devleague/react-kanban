exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
  .then(function () {
    // Inserts seed entries
    return knex('cards').insert([
      {
        title: "Clean car",
        body: "Give it the ol vacuum",
        priority: "low",
        status: "Todo",
        createdBy: "Jamie",
        assignedTo: "Carl"
      },
      {
        title: "Clean room",
        body: "Give it the ol broom",
        priority: "low",
        status: "Todo",
        createdBy: "Harsh",
        assignedTo: "Sarah"
      },
      {
        title: "Walk the doggy",
        body: "Give it the ol leash",
        priority: "medium",
        status: "Doing",
        createdBy: "Romeo",
        assignedTo: "Nick"
      },
      {
        title: "Take out trash",
        body: "Give it the ol can",
        priority: "low",
        status: "Doing",
        createdBy: "Jamie",
        assignedTo: "Wymin"
      },
      {
        title: "Study programming",
        body: "Give it the ol college whirl",
        priority: "high",
        status: "Done",
        createdBy: "May",
        assignedTo: "Doug"
      },
      {
        title: "Grocery shopping",
        body: "Give it the ol credit card",
        priority: "medium",
        status: "Done",
        createdBy: "Harsh",
        assignedTo: "Sarah"
      }
    ]);
  });
};
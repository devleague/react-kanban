
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          title: 'Finish Monthly Financial Highlights',
          body: "Update for draft 2 pending suggested changes from reviewier",
          priority_id: 3,
          status_id: 2,
          created_by: 2,
          assigned_to: 1
        },
        {
          title: 'Statistical Report',
          body: "Update for current month end",
          priority_id: 2,
          status_id: 3,
          created_by: 2,
          assigned_to: 4
        },
        {
          title: 'Daily Deposit Reconciliation',
          body: "Daily update",
          priority_id: 1,
          status_id: 1,
          created_by: 2,
          assigned_to: 1
        },
        {
          title: 'Quarterly Call Report',
          body: "Create Call Report",
          priority_id: 3,
          status_id: 1,
          created_by: 3,
          assigned_to: 2
        }
      ]);
    });
};
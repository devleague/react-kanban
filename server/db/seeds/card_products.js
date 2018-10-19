let status = ['inqueue', 'inprogress', 'done'];
let priority = ['Low', 'Medium', 'High'];

exports.seed = function (knex, Promise) {

  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        { title: 'Make Better Styles', priorityId: priority[1], assigned_by: 'Tom', user: 'Abby', statusId: status[0] },
        { title: 'Frame work', priorityId: priority[2], assigned_by: 'Tom', user: 'Abby', statusId: status[1] },
        { title: 'Backend database structure', priorityId: priority[0], assigned_by: 'Tom', user: 'Abby', statusId: status[0] },
        { title: 'Link to express server', priorityId: priority[0], assigned_by: 'Tom', user: 'Abby', statusId: status[2] },
        { title: 'Communicate with client about app features', priorityId: priority[2], assigned_by: 'Nick', user: 'Abby', statusId: status[0] }
      ]);
    });
};

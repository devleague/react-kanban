exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('status').del(),
    knex('priority').del(),
    knex('users').del(),
    knex('cards').del()

  ]) 
      .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('status').insert([
          {name: 'To Do', rank: 2},
          {name: 'In Progress', rank: 1},
          {name: 'Complete', rank: 3}
        ]),
        knex('priority').insert([
          {name: 'High', rank: 1},
          {name: 'Medium', rank: 2},
          {name: 'Low', rank: 3}
        ]),
        knex('users').insert([
          {first_name: 'Sammi', last_name: 'CoCo', email: 'sammic@email.com'},
          {first_name: 'David', last_name: 'Jackson', email: 'david.jackson@email.com'},
          {first_name: 'Ryan', last_name: 'Andres', email: 'randres@email.com'}
        ]),
        knex('cards').insert([
          {title: 'Send invoices', body: 'Invoice ABC Company by 11/1', priority_id: 1, status_id: 1, assigned_to: 1},
          {title: 'Presentation: ABC Brand', body: 'Pitch deck for ABC branding. Concept, Influence, Logo, Color palette', priority_id: 2, status_id: 2, assigned_to: 2},
          {title: 'Follow up with Hank on swag', body: 'Material for towels is not right, see if he has other options', priority_id: 3, status_id: 3, assigned_to: 3}
          
        ])
      ])
    });
};
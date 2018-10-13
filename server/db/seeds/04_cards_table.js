exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards_table').insert([
        { card_id: 123,
          title: "Throw the trash", 
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
          priority_id: 999, 
          status_id: 10, 
          created_by: 0505, 
          assigned_to: 0320 
        },
        { card_id: 124,
          title: "Walk the dog", 
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
          priority_id: 555, 
          status_id: 90, 
          created_by: 1016, 
          assigned_to: 1982 
        },
        { card_id: 125,
          title: "Go to gym", 
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
          priority_id: 111, 
          status_id: 50, 
          created_by: 2001, 
          assigned_to: 2011 
        },
        { card_id: 126,
          title: "Office work", 
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
          priority_id: 999, 
          status_id: 50, 
          created_by: 2005, 
          assigned_to: 2017 
        }
      ]);
    });
};
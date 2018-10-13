exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_table').insert([
        { user_id: 0505,
          first_name: "Liz", 
          last_name: "Leos", 
          email: "liz@leos.com" 
        },
        { user_id: 0320,
          first_name: "Romeo", 
          last_name: "Corpuz", 
          email: "romeo@corpuz.com" 
        },
        { user_id: 1016,
          first_name: "Dharalyn", 
          last_name: "Lim", 
          email: "dharalyn@lim.com" 
        },
        { user_id: 1982,
          first_name: "James", 
          last_name: "Fortaleza", 
          email: "james@fortaleza.com" 
        },
        { user_id: 2001,
          first_name: "Sheryl", 
          last_name: "Park", 
          email: "sheryl@park.com" 
        },
        { user_id: 2011,
          first_name: "Ryan", 
          last_name: "Pilot", 
          email: "ryan@pilot.com" 
        },
        { user_id: 2005,
          first_name: "Tricia", 
          last_name: "Pow", 
          email: "tricia@pow.com"
        },
        { user_id: 2017,
          first_name: "Bobby", 
          last_name: "Leos", 
          email: "bobby@leos.com" 
        }
      ]);
    });
};
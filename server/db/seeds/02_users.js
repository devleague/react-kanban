
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: "Random",
          last_name: "Person",
          email: "random_person@whatever.com"
        },
        {
          first_name: "Another",
          last_name: "Individual",
          email: "another_individual@something.com"
        },
        {
          first_name: "This",
          last_name: "OtherPerson",
          email: "this_other_person@person.com"
        }
      ]);
    });
};

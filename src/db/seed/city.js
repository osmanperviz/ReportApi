
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('administrative_area').del()
    .then(function () {
      // Inserts seed entries
      return knex('administrative_area').insert([
        {id: 1, name: 'Köln'},
      ]);
    });
};

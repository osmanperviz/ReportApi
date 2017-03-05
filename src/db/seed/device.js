
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('device').del()
    .then(function () {
      // Inserts seed entries
      return knex('device').insert([
        {id: 'num1', manufacturer: 'apple'},
        {id: 'num2', manufacturer: 'lg'},
      ]);
    });
};

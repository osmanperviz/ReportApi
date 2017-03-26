
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('device').del()
    .then(function () {
      // Inserts seed entries
      return knex('device').insert([
        {id: 'num1', device_id: '234jvkcwerf6768'},
        {id: 'num2', manufacturer: '234jvkcwerf6756gj'},
      ]);
    });
};

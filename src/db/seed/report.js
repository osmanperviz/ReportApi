
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('report').del()
    .then(function () {
      // Inserts seed entries
      return knex('report').insert([
        {id: 1, address: 'Some adrress1', img_src: 'some1', device_id: 'num1'},
        {id: 2, address: 'Some adrress2', img_src: 'some2', device_id: 'num2'},
        {id: 3, address: 'Some adrress3', img_src: 'some3', device_id: 'num1'},
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('report').del()
    .then(function () {
      // Inserts seed entries
      return knex('report').insert([
        {id: 1, message: 'some1', address: 'Some adrress1', image_url: 'some1', device_id: 'num2', latitude: '123', longitude: '23456', administrativeCentar: 'some'},
        {id: 2, message: 'some2', address: 'Some adrress2', image_url: 'some2', device_id: 'num2', latitude: '123', longitude: '23456', administrativeCentar: 'some'},
        {id: 3, message: 'some3', address: 'Some adrress3', image_url: 'some3', device_id: 'num1', latitude: '123', longitude: '23456', administrativeCentar: 'some'},
      ]);
    });
};

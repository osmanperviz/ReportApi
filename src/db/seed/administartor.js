
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('administrative_area').del()
    .then(function () {
      // Inserts seed entries
      return knex('administrative_area').insert([
        {id: 1, name: 'Innenstad', city_id: 1},
        {id: 2, name: 'Rodenkirchen ', city_id: 1},
        {id: 3, name: 'Lindenthal', city_id: 1},
        {id: 4, name: 'Ehrenfeld', city_id: 1},
        {id: 5, name: 'Nippes', city_id: 1},
        {id: 6, name: 'Chorweiler', city_id: 1},
        {id: 7, name: 'Porz', city_id: 1},
        {id: 8, name: 'Kalk', city_id: 1},
        {id: 9, name: 'Mülheim', city_id: 1},
      ]);
    });
};

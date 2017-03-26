
exports.up = function(knex, Promise) {
  return knex.schema.createTable('administrative_area',(table) => {
    table.string('id').unique().notNullable();
    table.string('name').notNullable();
    table.timestamps();

    table.integer('city_id').references('city.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('administrative_area');
};

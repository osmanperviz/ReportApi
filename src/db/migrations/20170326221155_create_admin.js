
exports.up = function(knex, Promise) {
  return knex.schema.createTable('administrator',(table) => {
    table.string('id').unique().notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.timestamps();

    table.integer('administrative_area_id').references('administrative_area.id')
    table.integer('city_id').references('city.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('administrator');
};

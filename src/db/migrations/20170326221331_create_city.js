
exports.up = function(knex, Promise) {
  return knex.schema.createTable('city',(table) => {
    table.string('id').unique().notNullable();
    table.string('name').notNullable();
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('city');
};

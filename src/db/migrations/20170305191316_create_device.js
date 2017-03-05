
exports.up = function(knex, Promise) {
  return knex.schema.createTable('device',(table) => {
    table.string('id').unique().notNullable();
    table.string('manufacturer').notNullable();
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('device');
};

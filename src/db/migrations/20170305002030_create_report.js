
exports.up = function(knex, Promise) {
  return knex.schema.createTable('report', (table) =>{
    table.increments();
    table.string('device_id').notNullable();
    table.string('address').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('report');
};

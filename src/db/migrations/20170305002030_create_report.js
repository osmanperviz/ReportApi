
exports.up = function(knex, Promise) {
  return knex.schema.createTable('report', (table) => {
    table.increments().primary().notNullable();
    table.string('address').notNullable();
    table.string('img_src');
    table.integer('device_id').references('device.id')
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('report');
};

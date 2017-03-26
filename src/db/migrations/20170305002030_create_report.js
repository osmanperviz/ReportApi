
exports.up = function(knex, Promise) {
  return knex.schema.createTable('report', (table) => {
    table.increments().primary().notNullable();
    table.string('message').notNullable();
    table.string('latitude').notNullable();
    table.string('longitude').notNullable();
    table.string('administrativeCentar').notNullable();
    table.string('address').notNullable();
    table.string('image_url');

    table.integer('device_id').references('device.id')
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('report');
};

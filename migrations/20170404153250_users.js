
exports.up = function(knex, Promise) {
  table.increments();
  table.string('name').notNullable().defaultTo('');
  table.timestamps(true, true);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

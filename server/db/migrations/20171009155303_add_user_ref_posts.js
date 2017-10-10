
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('posts', function (table) {
    table.integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .index();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('posts', function (table) {
    table.dropColumn('user_id');
  });
};

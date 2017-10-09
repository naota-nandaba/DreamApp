
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.string('title').notNullable().defaultTo('');
    table.string('body').notNullable().defaultTo('');
    table.integer('user_id').notNullable();
    table.string('image_url').defaultTo('');;
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};

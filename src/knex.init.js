const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'test',
    password: 'test',
    database: 'gql_db'
  },
  pool: { min: 0, max: 7 }
});

const usersTable = knex.schema.hasTable('users').then(exists => {
  if (!exists) {
    return knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('username');
      table.string('email');
      table.string('password');
      table.integer('age');
      table.boolean('isVerified');      
      table.timestamps();
    });
  }
});

const documentsTable = knex.schema.hasTable('documents').then(exists => {
  if (!exists) {
    return knex.schema.createTable('documents', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('type');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.timestamps();
    });
  }
});

usersTable.then(documentsTable);

module.exports = knex;
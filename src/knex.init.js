const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'test',
    password: 'test',
    database: 'gql_db'
  },
  pool: { min: 0, max: 7 },
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
    }).then(() => {
      return knex('users').insert([{
        username: 'user1',
        email: 'user1@email.com',
        password: 'user1-pass',
        age: 20,
        isVerified: false,
      }, {
        username: 'user2',
        email: 'user2@email.com',
        password: 'user2-pass',
        age: 25,
        isVerified: true,
      }]);
    })
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
    }).then(() => {
      return knex('documents').insert([{
        name: 'document 1',
        type: 'pdf',
        user_id: 1
      }, {
        name: 'document 2',
        type: 'docx',
        user_id: 1
      }])
    })
  }
});

usersTable.then(documentsTable);

knex.on('query', data => {
  console.log('\x1b[35m>>> sql> \x1b[35m', knex.raw(data.sql, data.bindings).toString(), '\n');
});

module.exports = knex;
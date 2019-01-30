const knex = require('../../knex.init');

module.exports = {
  Query: {
    users: (parent, args, context, info) => {
      return knex('users').select('username');
    },
    user: async (parent, args, context, info) => {
      return await knex('users').where({
        id: args.id
      }).first();
    }
  },
  User: {
    documents: async (parent, args, context, info) => {
      return await knex('documents').where({
        user_id: parent.id,
      });
    },
  }
};
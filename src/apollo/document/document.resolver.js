const knex = require('../../knex.init');

module.exports = {
  Document: {
    userId: parent => parent.user_id,
    user: async parent => {
      return await knex('users').where({
        id: parent.user_id
      }).first();
    }
  }
};
const knex = require('../../knex.init');

module.exports = {
  Query: {
    documents: async () => {
      return await knex('documents');
    }
  },
  Mutation: {
    createDocument: async (parent, { doc }) => {
      doc.user_id = doc.userId;
      delete doc.userId;
      
      const id = await knex('documents').insert(doc);
      return await knex('documents').where({ id }).first();
    }
  },
  Document: {
    userId: parent => parent.user_id,
    user: async parent => {
      return await knex('users').where({
        id: parent.user_id
      }).first();
    }
  }
};
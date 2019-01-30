const knex = require('../../knex.init');

function setType(type) {
  return elem => ({
    ...elem,
    _type: type,
  });
}

module.exports = {
  Query: {
    searchByName: async (parent, { name }) => {
      const documents = await knex('documents')
        .where('name', 'like', `%${name}%`)
        .map(setType('Document'));

      const users = await knex('users')
        .where('username', 'like', `%${name}%`)
        .map(setType('User'));

      return [...users, ...documents];
    }
  },
  UserDoc: {
    __resolveType: parent => parent._type,
  },
};
const { ApolloServer } = require('apollo-server-express');
const { combineResolvers } = require('apollo-resolvers');
const linkSchema = require('./link.schema');
const { userResolver, userSchema } = require('./user');
const { documentResolver, documentSchema } = require('./document');

module.exports = new ApolloServer({
  typeDefs: [
    linkSchema,
    userSchema,
    documentSchema,
  ],
  resolvers: combineResolvers([
    userResolver,
    documentResolver,
  ]),
});

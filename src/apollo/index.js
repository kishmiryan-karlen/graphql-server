const { ApolloServer } = require('apollo-server-express');
const { combineResolvers } = require('apollo-resolvers');
const linkSchema = require('./link.schema');
const { userResolver, userSchema } = require('./user');
const { documentResolver, documentSchema } = require('./document');
const { commonResolver, commonSchema } = require('./common');

module.exports = new ApolloServer({
  typeDefs: [
    linkSchema,
    userSchema,
    documentSchema,
    commonSchema,
  ],
  resolvers: combineResolvers([
    userResolver,
    documentResolver,
    commonResolver,
  ]),
});

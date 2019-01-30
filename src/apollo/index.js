const { ApolloServer, gql } = require('apollo-server-express');
const { userResolver, userSchema } = require('./user');

module.exports = new ApolloServer({
  typeDefs: gql`
    type Query {
      users: [User]
      user(id: ID!): User
    }
    ${userSchema}
  `,
  resolvers: {
    ...userResolver
  },
});

const { ApolloServer, gql } = require('apollo-server-express');

module.exports = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world'
    }
  },
});

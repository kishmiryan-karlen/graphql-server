const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    searchByName(name: String!): [UserDoc]
  }

  union UserDoc = User|Document
`;
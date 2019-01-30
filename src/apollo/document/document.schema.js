const { gql } = require('apollo-server-express');

module.exports = gql`
  type Document {
    id: ID!
    name: String
    type: String
    userId: ID
    user: User
  }
`;
const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    users: [User]
    user(id: ID!): User
  }

  type User {
    id: ID!
    username: String
    email: String
    password: String
    age: Int
    isVerified: Boolean
    documents: [Document]
  }
`;
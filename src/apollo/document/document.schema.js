const { gql } = require('apollo-server-express');

const fields = `
  name: String
  type: String
  userId: ID
`;

module.exports = gql`
  extend type Query {
    documents: [Document]
  }

  extend type Mutation {
    createDocument(doc: DocumentInput!): Document
  }

  input DocumentInput {
    ${fields}
  }

  type Document {
    id: ID!
    user: User
    ${fields}
  }
`;
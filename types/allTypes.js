import { gql } from 'apollo-server'

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const allTypeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book @cacheControl(maxAge: 240){
    id: ID
    title: String
    author: Author @cacheControl(maxAge: 240)
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    authors: [Author]
    book(id: ID!): Book
    author(id: ID!): Author
  }
  
  type Author @cacheControl(maxAge: 240){
    id: ID
    name: String
    books: [Book] @cacheControl(maxAge: 240)
  }
`

export default allTypeDefs
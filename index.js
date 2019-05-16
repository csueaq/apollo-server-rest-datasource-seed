import { ApolloServer } from 'apollo-server'
import { allTypeDefs as typeDefs } from './types'
import { RootQueris as AuthorRootQueries ,Author, AuthorAPI } from './author'
import { RootQueris as BookRootQueries ,Book, BookAPI, Mutation } from './book'




// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: { ...AuthorRootQueries, ...BookRootQueries},
    Mutation: {
        ...Mutation
    },
    Author,
    Book
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            authorAPI: new AuthorAPI(),
            bookAPI: new BookAPI(),
        };
    }
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
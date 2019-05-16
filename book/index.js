import { book, author, books, addBook } from './resolver'
import { BookAPI } from './datasource'
const RootQueris = {
    book,
    books
}
const Mutation = {
    addBook
}
const Book = {
    author
}

export  {
    RootQueris,
    Mutation,
    Book,
    BookAPI
}
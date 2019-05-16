import { book, author, books, addBook, updateBook, deleteBook } from './resolver'
import { BookAPI } from './datasource'
const RootQueris = {
    book,
    books
}
const Mutation = {
    addBook,
    updateBook,
    deleteBook
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
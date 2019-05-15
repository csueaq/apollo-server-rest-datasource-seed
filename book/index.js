import { book, author, books } from './resolver'
import { BookAPI } from './datasource'
const RootQueris = {
    book,
    books
}

const Book = {
    author
}

export  {
    RootQueris,
    Book,
    BookAPI
}
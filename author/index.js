import { author, authors, books, book } from './resolver'
import {AuthorAPI} from './datasource'
const RootQueris = {
    authors,
    author
}

const Author = {
    books,
    book
}

export  {
    RootQueris,
    Author,
    AuthorAPI
}
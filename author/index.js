import { author, authors, books } from './resolver'
import {AuthorAPI} from './datasource'
const RootQueris = {
    authors,
    author
}

const Author = {
    books
}

export  {
    RootQueris,
    Author,
    AuthorAPI
}
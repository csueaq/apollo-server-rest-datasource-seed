const { RESTDataSource } = require('apollo-datasource-rest');

import { API } from '../config'

export class BookAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = API;
    }

    async getBook(id) {
        return await this.get(`book/${id}`)
    }

    async getBooks() {
        return await this.get('books')
    }

    async addBook({ title, author} ) {
        return await this.post('book', { title, author })
    }

    async updateBook({ id, title, author} ) {
        return await this.put('book', { id, title, author })
    }

    async deleteBook(id) {
        return await this.delete(`book/${id}`)
    }
}


/*
export const getBooks = async() => {
    console.log(`calling ${API}/books`)
    const { body } = await agent.get(`${API}/books`)
    return body
}
export const getBook = async (id) => {
    console.log(`calling ${API}/book/${id}`)
    const { body } = await agent.get(`${API}/book/${id}`)
    return body
}*/

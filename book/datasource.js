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
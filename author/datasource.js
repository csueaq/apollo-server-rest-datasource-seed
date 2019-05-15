const { RESTDataSource } = require('apollo-datasource-rest');
import { API } from '../config'

export class AuthorAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = API;
    }


    async getAuthor(id) {
        return await this.get(`author/${id}`)
    }

    async getAuthors() {
        return  await this.get('authors')
    }
}



export const books = async ({ id }, _, { dataSources }) => {

    let result = []
    const bookIds = await dataSources.authorAPI.getBooksByAuthor(id)
    for (const bookId of bookIds) {
        const book =  await dataSources.bookAPI.getBook(bookId)
        result.push(book)
    }
    return result

}

export const book = async({ books }, { id }, { dataSources } ) => {

    if(books.includes(id))
        return await dataSources.bookAPI.getBook(id)
    else
        return null
}

export const authors = async(_, _args, { dataSources } ) => await dataSources.authorAPI.getAuthors()

export const author = async (_, { id }, { dataSources }) => await dataSources.authorAPI.getAuthor(id)



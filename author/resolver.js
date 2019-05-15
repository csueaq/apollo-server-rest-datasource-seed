


export const books = async ({ books }, _, { dataSources }) => {

    let result = []
    for (const bookId of books) {
        const book =  await dataSources.bookAPI.getBook(bookId)
        result.push(book)
    }
    return result

}

export const authors = async(_, _args, { dataSources } ) => await dataSources.authorAPI.getAuthors()

export const author = async (_, { id }, { dataSources }) => await dataSources.authorAPI.getAuthor(id)



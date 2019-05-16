
export const author = async( { author }, _, { dataSources } ) => await dataSources.authorAPI.getAuthor(author)


export const books = async( _, _args, { dataSources } ) => await dataSources.bookAPI.getBooks()



export const book = async ( _, { id }, { dataSources }) => await dataSources.bookAPI.getBook(id)

export const deleteBook = async ( _, { id }, { dataSources }) => await dataSources.bookAPI.deleteBook(id)

export const addBook = async (_, { title, author }, { dataSources }) => await dataSources.bookAPI.addBook( {title, author} )

export const updateBook = async (_, { id, title, author }, { dataSources }) => await dataSources.bookAPI.updateBook( {id, title, author} )
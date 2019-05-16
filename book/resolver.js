
export const author = async( { author }, _, { dataSources } ) => await dataSources.authorAPI.getAuthor(author)


export const books = async( _, _args, { dataSources } ) => await dataSources.bookAPI.getBooks()



export const book = async ( _, { id }, { dataSources }) => await dataSources.bookAPI.getBook(id)

export const addBook = async (_, { title, author }, { dataSources }) => await dataSources.bookAPI.addBook( {title, author} )
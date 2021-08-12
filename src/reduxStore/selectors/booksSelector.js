// use this when you not using combineReducer
// export const booksSelector = state => state.books;

// use this to select the content of your store when you using combineReducer
export const selectBooks = (state) => state.books.books;
export const totalBooks = (state) => state.books.books.length;

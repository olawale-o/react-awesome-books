export const init = (initialBooks) => ({ books: initialBooks })

export const bookReducer = (state, action) => {
  switch(action.type) {
    case 'allBooks':
      return { books: state.books };
    case 'addBook':
      return { books: [ ...state.books, action.payload ] };
    case 'emptyBooks':
      return init(action.payload);
    default:
      throw new Error('wahala')
  }
}
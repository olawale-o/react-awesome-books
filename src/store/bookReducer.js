export default function bookReducer(state, action) {
  switch(action.type) {
    case 'allBooks':
      return { state };
    case 'addBook':
      return { books: [ ...state.books, action.payload ] };
    default:
      throw new Error('wahala')
  }
}
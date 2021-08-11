import appState from "../appState";

export default function bookReducer(state = appState, action) {
  switch (action.type) {
    case 'book/AddBook':
      return { ...state, books: [ ...state.books, action.payload ]  };
    case 'book/removeBook':
      const books = state.books.filter((book) => action.payload !== book.id);
      return { books, };
    default:
      return state;
  }
}
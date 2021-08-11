import appState from "../appState";

export default function bookReducer(state = appState, action) {
  switch (action.type) {
    case 'book/AddBook':
      return { ...state, books: [ ...state.books, action.payload ]  };
  
    default:
      return state;
  }
}
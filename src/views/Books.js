import React, { useReducer } from 'react'
import BookList from '../components/BookList.js';
import AddBook from '../components/AddBook.js';
import { bookReducer } from '../store/bookReducer.js';
import { initialState } from '../store/bookState.js';
import { BookContext } from '../contextProvider/bookProvider.js';

const Books = () => {
  const [ state, dispatch ] = useReducer(bookReducer, initialState);

  const addBookToStore = ({ title, author }) => {
    dispatch({ type: 'addBook', payload: {id: 3, title, author } });
  }

  // Use this when an init function is passed as a params to to useReducer
  // const emptyBooks = () => dispatch({type: 'emptyBooks', payload: [] });
  return (
    <div>
      <BookContext.Provider value={[state, dispatch]}>
        <BookList books={state.books} />
        <AddBook addBookToStore={addBookToStore} />
      </BookContext.Provider>
    </div>
  )
}

export default Books

import React, { useReducer } from 'react'
import BookList from '../components/BookList.js';
import AddBook from '../components/AddBook.js';
import bookReducer from '../store/bookReducer.js';
import { initialState } from '../store/bookState.js';

const Books = () => {
  const [ state, dispatch ] = useReducer(bookReducer, initialState);
  const AddBookToStore = ({ title, author }) => {
    dispatch({ type: 'addBook', payload: {id: 3, title, author } });
  }
  return (
    <div>
      <BookList books={state.books} />
        <AddBook AddBookToStore={AddBookToStore} />
    </div>
  )
}

export default Books

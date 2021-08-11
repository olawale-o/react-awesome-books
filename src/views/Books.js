import React, { useReducer, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BookList from '../components/BookList.js';
import AddBook from '../components/AddBook.js';
import { bookReducer } from '../store/bookReducer.js';
import { initialState } from '../store/bookState.js';
import { BookContext } from '../contextProvider/bookProvider.js';
import { addBook } from '../reduxStore/actions/action_creators.js';
import { selectBooks, totalBooks } from '../reduxStore/selectors/booksSelector';
import Header from '../components/Header.js';
import Contact from '../components/Contact.js';

const Books = () => {
  const [state, dispatch] = useReducer(bookReducer, initialState);
  const [toggle, setToggle] = useState(1);
  const books = useSelector(selectBooks);
  const booksLen = useSelector(totalBooks);
  const dispatchAction = useDispatch();

  const addBookToStore = ({ title, author }) => {
    // dispatch({ type: 'addBook', payload: {id: 3, title, author } });
    dispatchAction(addBook({id: booksLen + 1, title, author, }));
  }

  // Use this when an init function is passed as a params to to useReducer
  // const emptyBooks = () => dispatch({type: 'emptyBooks', payload: [] });

  const onToggle = (index) => {
    setToggle(index);
  }
  return (
    <>
      <BookContext.Provider value={[state, dispatch]}>
        <Header toggle={toggle} onToggle={onToggle} />
        <BookList books={books} toggle={toggle} />
        <AddBook addBookToStore={addBookToStore} toggle={toggle} />
        <Contact toggle={toggle} />
      </BookContext.Provider>
    </>
  )
}

export default Books

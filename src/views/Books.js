import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BookList from '../components/BookList.js';
import AddBook from '../components/AddBook.js';
import { BookContext } from '../contextProvider/bookProvider.js';
import { addBook, removeBook } from '../reduxStore/actions/action_creators.js';
import { selectBooks, totalBooks } from '../reduxStore/selectors/booksSelector';
import Header from '../components/Header.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';

const Books = () => {
  // enable this when you use useReducer Hook
  // const [state, dispatch] = useReducer(bookReducer, initialState);
  const [toggle, setToggle] = useState(1);
  const books = useSelector(selectBooks);
  const booksLen = useSelector(totalBooks);
  const dispatchAction = useDispatch();

  const addBookToStore = ({ title, author }) => {
    // use this when you use useReducer hook
    // dispatch({ type: 'addBook', payload: {id: 3, title, author } });
    dispatchAction(addBook({id: new Date().toString(), title, author, }));
  }

  // Use this when an init function is passed as a params to to useReducer
  // const emptyBooks = () => dispatch({type: 'emptyBooks', payload: [] });

  const onToggle = (index) => {
    setToggle(index);
  };

  const onRemoveBook = (bookId) => {
    dispatchAction(removeBook(bookId));
    console.log(booksLen)
  };

  const state = {
    toggle,
    onToggle,
  }
  return (
    <>
      <BookContext.Provider value={state}>
        <Header toggle={toggle} />
        <main>
          <section>
            <BookList books={books} toggle={toggle} removeBook= {onRemoveBook} />
            <AddBook addBookToStore={addBookToStore} toggle={toggle} />
            <Contact toggle={toggle} />
          </section>
        </main>
        <Footer />
      </BookContext.Provider>
    </>
  )
}

export default Books

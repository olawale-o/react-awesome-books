import { useContext } from 'react';
import PropTypes from 'prop-types';
import BookContext from '../contextProvider/bookProvider';
import Book from './Book';

const BookList = ({ books, removeBook }) => {
  const { toggle } = useContext(BookContext);
  const bookList = books.map(({
    id, title, author,
  }) => (
    <Book
      key={id}
      title={title}
      author={author}
      id={id}
      removeBook={removeBook}
    />
  ));
  return (
    <div className={toggle === 1 ? 'books' : 'books hide'}>
      <div className="book-heading">
        <h2>All awesome books</h2>
      </div>
      <ul className="list-of-books">
        { bookList }
      </ul>
    </div>
  );
};

export default BookList;

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};

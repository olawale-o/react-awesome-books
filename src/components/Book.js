import PropTypes from 'prop-types';

const Book = ({
  id, title, author, removeBook,
}) => (
  <li id="book-id" className="book-item">
    <div className="book">
      <div className="book__title-author">
        <h1 className="title">{title}</h1>
        <span className="by">By</span>
        <p className="authour">{ author }</p>
      </div>
      <button className="btn" type="button" onClick={() => removeBook(id)}>Remove</button>
    </div>
  </li>
);

export default Book;

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

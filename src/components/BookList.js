import Book from './Book.js';


const BookList = ({ books }) => {

  const bookList = books.map(({ id, title, author }) => 
    <Book key = {id} title = {title} author = { author } /> );
  return (
    <div className="books">
      <div className="book-heading">
        <h2>All awesome books</h2>
       </div>
       <ul className="list-of-books">
        { bookList }
       </ul>
    </div>
  )
}
export default BookList;
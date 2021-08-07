import Book from './Book.js';


const BookList = ({ books }) => {

  const bookList = books.map(({ id, title, author }) => 
    <Book key = {id} title = {title} author = { author } /> );
  return (
    <div>
      { bookList }
    </div>
  )
}
export default BookList;
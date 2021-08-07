import Book from './Book.js';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'kings men',
      author: 'wale',
    },
    {
      id: 2,
      title: 'Art of war',
      author: 'sun tzu',
    },
  ];
  const bookList = books.map(({ id, title, author }) => <Book key = {id} title = {title} author = { author } /> );
  return (
    <div>
      { bookList }
    </div>
  )
}
export default BookList;
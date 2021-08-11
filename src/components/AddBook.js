import { useState, useRef } from "react";
// import { BookContext } from "../contextProvider/bookProvider";
const AddBook = ({ addBookToStore, toggle }) => {
  // This works if you switch to context provider
  // const [ , dispatch] = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const titleField = useRef(null);

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addBookToStore({ title, author });
   // use this when you switch to react context
   // dispatch({ type: 'addBook', payload: {id: 3, title, author } });
    setTitle('');
    setAuthor('');
    titleField.current.focus();
  }

  return (
    <div className={ toggle === 2 ? "form" : "form hide" } id="form">
      <h2>Add a new book</h2>
      <form className="add-book-form" id="add-book-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={titleField} value={title} placeholder="Title" required onChange={handleTitle} />
          <p id="title-error"></p>
        </div>
        <div>
          <input type="text" value={author} placeholder="Author" required onChange={handleAuthor} />
          <p id="author-error"></p>
        </div>
        <input type="submit" value="Add" id="add-book-button" />
      </form>
    </div>
  )
}

export default AddBook;
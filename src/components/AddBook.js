import { useState } from "react";
const AddBook = ({ AddBookToStore }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    AddBookToStore({ title, author })
    setTitle('');
    setAuthor('');
    event.preventDefault();
  }

  return (
    <div className="form" id="form">
      <h2>Add a new book</h2>
      <form className="add-book-form" id="add-book-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="title" value={title} placeholder="Title" required onChange={handleTitle} />
          <p id="title-error"></p>
        </div>
        <div>
          <input type="text" name="author" value={author} placeholder="Author" required onChange={handleAuthor} />
          <p id="author-error"></p>
        </div>
        <input type="submit" value="Add" id="add-book-button" />
      </form>
    </div>
  )
}

export default AddBook;
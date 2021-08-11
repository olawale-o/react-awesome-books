const Book = ({ id, title, author, removeBook }) => {
  return (
    <li id="book-id" className="book-item">
     <div className="book">
      <div className="book__title-author">
        <h1 className="title">{ title }</h1>
        <span className="by">By</span>
        <p className="authour">{ author }</p>
      </div>
      <button className="btn" onClick={() => removeBook(id)}>Remove</button>
     </div>
   </li>  
  )
};

export default Book;
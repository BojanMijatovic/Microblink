import React from 'react';
import Book from './Book/Book';

const BooksList = ({ books, setBooks }) => {
  const onClickRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  const singleBook = books.map((book) => <Book key={book.id} {...book} onClickRemoveBook={onClickRemoveBook} />);
  return <div className='book-list'>{singleBook}</div>;
};

export default BooksList;

/*
 
const BooksList = ({ books, setBooks }) => {

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;
*/

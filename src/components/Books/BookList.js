import React, { useState } from 'react';
import Book from './Book/Book';

const BooksList = ({ books, setBooks, onTakenBook, newArrTakenBook }) => {
  const [takenBook, setTakenBook] = useState([]);

  const onPickBook = () => {
    setTakenBook([...takenBook, { id: books[0].id, title: books[0].title, author: books[0].author }]);
    onTakenBook(takenBook);
  };

  newArrTakenBook = [...takenBook];

  const onClickRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const singleBook = books.map((book) => (
    <Book key={book.id} {...book} onClickRemoveBook={onClickRemoveBook} onPickBook={onPickBook} onTakenBook={onTakenBook} />
  ));
  return <div className='book-list'>{singleBook}</div>;
};

export default BooksList;

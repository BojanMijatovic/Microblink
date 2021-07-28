import React from 'react';
import BookForm from '../BookForm';
import { useParams } from 'react-router-dom';

const EditBook = ({ history, books, setBooks }) => {
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);

  const onSubmitBook = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push('/');
  };

  return (
    <div>
      <BookForm book={bookToEdit} onSubmitBook={onSubmitBook} />
    </div>
  );
};

export default EditBook;

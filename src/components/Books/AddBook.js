import React from 'react';
import BookForm from './BookForm';

const AddBook = ({ history, books, setBooks }) => {
  const onSubmitBook = (book) => {
    setBooks([book, ...books]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <BookForm onSubmitBook={onSubmitBook} />
    </React.Fragment>
  );
};

export default AddBook;

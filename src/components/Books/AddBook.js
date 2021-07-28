import React from 'react';
import BookForm from './BookForm';

const AddBook = () => {
  const onSubmitBook = (book) => {
    console.log(book);
  };

  return (
    <React.Fragment>
      <BookForm onSubmitBook={onSubmitBook} />
    </React.Fragment>
  );
};

export default AddBook;

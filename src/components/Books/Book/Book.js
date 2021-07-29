import React from 'react';

import { useHistory } from 'react-router-dom';

const Book = ({ id, title, author, onClickRemoveBook, onPickBook, onTakenBook }) => {
  const history = useHistory();

  const takenBooks = () => {
    onTakenBook(id, title, author);
    onPickBook(id, title, author);
    onClickRemoveBook(id);
  };

  return (
    <div className=''>
      <h2 className=''>{title}</h2>
      <div className='book-details'>
        <div>Author: {author}</div>
      </div>
      <button onClick={() => takenBooks(id, title, author)}>take</button>
      <button onClick={() => history.push(`/edit/${id}`)}>Edit</button>
      <button onClick={() => onClickRemoveBook(id)}>Delete</button>
    </div>
  );
};

export default Book;

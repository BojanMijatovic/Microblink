import React from 'react';
import { useHistory } from 'react-router-dom';

const Book = ({ id, title, author, onClickRemoveBook }) => {
  const history = useHistory();
  return (
    <div className=''>
      <h2 className=''>{title}</h2>
      <div className='book-details'>
        <div>Author: {author}</div>
      </div>

      <button onClick={() => history.push(`/edit/${id}`)}>Edit</button>
      <button onClick={() => onClickRemoveBook(id)}>Delete</button>
    </div>
  );
};

export default Book;

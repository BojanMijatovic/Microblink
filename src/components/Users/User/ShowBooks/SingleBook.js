import React from 'react';

const SingleBook = ({ title, author }) => {
  return (
    <div className=''>
      <h3>Title: {title}</h3>
      <h3>Author: {author}</h3>
    </div>
  );
};

export default SingleBook;

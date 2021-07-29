import React from 'react';

const SingleBook = ({ title, author }) => {
  return (
    <React.Fragment>
      <h3>Title: {title}</h3>
      <h3>Author: {author}</h3>
    </React.Fragment>
  );
};

export default SingleBook;

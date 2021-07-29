import React from 'react';

const ShowBooks = ({ takenBooks }) => {
  const books = takenBooks.map((book, id = book.id) => <p key={id}>{book.title}</p>);
  return <div className=''>{books}</div>;
};

export default ShowBooks;

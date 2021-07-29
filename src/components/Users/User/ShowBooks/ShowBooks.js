import React from 'react';
import SingleBook from './SingleBook';

const ShowBooks = ({ takenBooks }) => {
  const showSingleBook = takenBooks.map((book, id = book.id) => <SingleBook key={id} {...book} />);
  return <div className=''>{showSingleBook}</div>;
};

export default ShowBooks;

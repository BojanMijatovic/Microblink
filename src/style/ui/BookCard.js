import React from 'react';
import './BookCard.scss';

const BookCard = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default BookCard;

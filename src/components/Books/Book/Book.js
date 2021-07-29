import React from 'react';
import { useHistory } from 'react-router-dom';
import BookCard from '../../../style/ui/BookCard';
import styles from './Book.module.scss';
import ButtonGroup from '../../../style/ui/ButtonGroup/ButtonGroup';
import Buttons from '../../../style/ui/Buttons/Buttons';

const Book = ({ id, title, author, onClickRemoveBook, onPickBook, onTakenBook }) => {
  const history = useHistory();

  const takenBooks = () => {
    onTakenBook(id, title, author);
    onPickBook(id, title, author);
    onClickRemoveBook(id);
  };

  return (
    <BookCard className={styles.book}>
      <h2 className={styles.book_title}>Title: {title}</h2>
      <h3 className={styles.book_author}>Author: {author}</h3>
      <ButtonGroup>
        <Buttons onClick={() => takenBooks(id, title, author)}>take</Buttons>
        <Buttons onClick={() => history.push(`/edit/${id}`)}>Edit</Buttons>
        <Buttons onClick={() => onClickRemoveBook(id)}>Delete</Buttons>
      </ButtonGroup>
    </BookCard>
  );
};

export default Book;

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  const [book, setBook] = useState({
    title: props.book ? props.book.title : '',
    author: props.book ? props.book.author : '',
  });

  const { title, author } = book;

  const onSubmitBookForm = (e) => {
    e.preventDefault();

    if (title.trim().length === 0 || author.trim().length === 0) {
      return;
    }

    const book = {
      id: uuidv4(),
      title,
      author,
    };

    setBook((prevState) => {
      return { ...prevState, title: (e.target.value = ''), author: (e.target.value = '') };
    });
    props.onSubmitBook(book);
  };

  const onInputTitleChange = (e) => {
    setBook((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const onInputAuthorChange = (e) => {
    setBook((prevState) => {
      return { ...prevState, author: e.target.value };
    });
  };

  return (
    <div className=''>
      <form onSubmit={onSubmitBookForm}>
        <div className=''>
          <label htmlFor='book'>Book</label>
          <input type='text' name='title' value={title} placeholder='Enter book' onChange={onInputTitleChange} />
        </div>
        <div className=''>
          <label htmlFor='author'>Author</label>
          <input type='text' name='author' value={author} placeholder='Enter author' onChange={onInputAuthorChange} />
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default BookForm;

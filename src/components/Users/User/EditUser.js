import React from 'react';
import UserForm from '../UserForm';
import { useParams } from 'react-router-dom';

const EditUser = ({ history, users, setUsers }) => {
  const { id } = useParams();
  const userToEdit = users.find((user) => user.id === id);

  const onSubmitEditUser = (user) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers([user, ...filteredUsers]);
    history.push('users-add');
  };

  return (
    <div>
      <UserForm user={userToEdit} onSubmitEditUser={onSubmitEditUser} />
    </div>
  );
};

export default EditUser;

/*
import React from 'react';
import BookForm from '../BookForm';
import { useParams } from 'react-router-dom';

const EditBook = ({ history, books, setBooks }) => {
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);

  const onSubmitBook = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push('/');
  };

  return (
    <div>
      <BookForm book={bookToEdit} onSubmitBook={onSubmitBook} />
    </div>
  );
};

export default EditBook;
*/

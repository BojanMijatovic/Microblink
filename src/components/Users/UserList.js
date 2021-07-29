import React from 'react';
import User from './User/User';

const UserList = ({ users, setUsers, onTakenBook, takenBooks }) => {
  const onClickRemoveUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const singleUser = users.map((user) => (
    <User key={user.id} {...user} onTakenBook={onTakenBook} takenBooks={takenBooks} onClickRemoveUser={onClickRemoveUser} />
  ));
  return <div className='book-list'>{singleUser}</div>;
};

export default UserList;

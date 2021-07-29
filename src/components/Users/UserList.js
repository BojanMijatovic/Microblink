import React from 'react';
import User from './User/User';
import List from '../../style/ui/List/List';

const UserList = ({ users, setUsers, onTakenBook, takenBooks }) => {
  const onClickRemoveUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const singleUser = users.map((user) => (
    <User key={user.id} {...user} onTakenBook={onTakenBook} takenBooks={takenBooks} onClickRemoveUser={onClickRemoveUser} />
  ));
  return <List>{singleUser}</List>;
};

export default UserList;

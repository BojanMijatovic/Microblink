import React from 'react';
import UserForm from '../UserForm';
import { useParams } from 'react-router-dom';

const EditUser = ({ history, users, setUsers }) => {
  const { id } = useParams();
  const userToEdit = users.find((user) => user.id === id);

  const onSubmitEditUser = (user) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers([user, ...filteredUsers]);
    history.push('/users-add');
  };

  return (
    <div>
      <UserForm user={userToEdit} onSubmitEditUser={onSubmitEditUser} />
    </div>
  );
};

export default EditUser;

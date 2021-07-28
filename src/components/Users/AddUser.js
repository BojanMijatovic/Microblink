import React from 'react';
import UserForm from './UserForm';

const AddUser = ({ history, users, setUsers }) => {
  const onSubmitUser = (user) => {
    setUsers([user, ...users]);
    history.push('/users');
  };

  return (
    <React.Fragment>
      <UserForm onSubmitUser={onSubmitUser} />
    </React.Fragment>
  );
};

export default AddUser;

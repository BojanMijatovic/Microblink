import React from 'react';
import UserForm from './UserForm';

const AddUser = () => {
  const onSubmitUser = (user) => {
    console.log(user);
  };

  return (
    <React.Fragment>
      <UserForm onSubmitUser={onSubmitUser} />
    </React.Fragment>
  );
};

export default AddUser;

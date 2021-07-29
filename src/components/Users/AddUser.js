import React from 'react';
import UserForm from './UserForm';
import Form from '../../style/ui/Form/Form';

const AddUser = ({ history, users, setUsers }) => {
  const onSubmitUser = (user) => {
    setUsers([user, ...users]);
    history.push('/users');
  };

  return (
    <Form>
      <UserForm onSubmitUser={onSubmitUser} />
    </Form>
  );
};

export default AddUser;

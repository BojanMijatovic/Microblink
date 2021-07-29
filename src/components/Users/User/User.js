import React from 'react';

import { useHistory } from 'react-router-dom';

const User = ({ id, name, lastName, date, onClickRemoveUser }) => {
  const history = useHistory();

  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  const onTakeBook = () => {
    history.push(`/`);
  };

  return (
    <div className=''>
      <h2 className=''>Name: {name}</h2>
      <div className='book-details'>
        <div>LastName: {lastName}</div>
        <div className=''>
          <div>
            Date: {month} {day} {year}
          </div>
        </div>
      </div>
      <button onClick={() => onTakeBook(id)}>Take book</button>
      <button onClick={() => history.push(`users-add/edit/${id}`)}>Edit</button>
      <button onClick={() => onClickRemoveUser(id)}>Delete</button>
    </div>
  );
};

export default User;

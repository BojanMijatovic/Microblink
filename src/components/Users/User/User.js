import React from 'react';
import { useHistory } from 'react-router-dom';
import ShowBooks from './ShowBooks/ShowBooks';
import Date from './Date/Date';

const User = ({ id, name, lastName, date, onClickRemoveUser, takenBooks }) => {
  const history = useHistory();

  const onTakeBook = () => {
    history.push(`/`);
    console.log(id);
    console.log(name);
  };

  return (
    <div className=''>
      <h2 className=''>Name: {name}</h2>
      <div className='book-details'>
        <div>LastName: {lastName}</div>
        <div className=''>
          <div>
            <Date date={date} />
          </div>
        </div>
      </div>
      <div className='book-details'>
        <ShowBooks takenBooks={takenBooks} />
      </div>
      <button onClick={() => onTakeBook(id)}>Take book</button>
      <button onClick={() => history.push(`users-add/edit/${id}`)}>Edit</button>
      <button onClick={() => onClickRemoveUser(id)}>Delete</button>
    </div>
  );
};

export default User;

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UserForm = (props) => {
  const [user, setUser] = useState({
    name: props.user ? props.user.name : '',
    lastName: props.lastName ? props.user.lastName : '',
    birthDay: props.birthDay ? props.user.birthDay : '',
  });

  const { name, lastName, birthDay } = user;

  const onSubmitBookForm = (e) => {
    e.preventDefault();

    const user = {
      id: uuidv4(),
      name,
      date: new Date(birthDay),
    };

    setUser((prevState) => {
      return { ...prevState, name: (e.target.value = ''), lastName: (e.target.value = '') };
    });
    console.log(user);
  };

  const onInputNameChange = (e) => {
    setUser((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const onInputLastNameChange = (e) => {
    setUser((prevState) => {
      return { ...prevState, lastName: e.target.value };
    });
  };

  const onInputBirthDateChange = (e) => {
    setUser((prevState) => {
      return { ...prevState, birthDay: e.target.value };
    });
  };

  return (
    <form onSubmit={onSubmitBookForm}>
      <div className=''>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' value={name} placeholder='Enter name' onChange={onInputNameChange} />
      </div>
      <div className=''>
        <label htmlFor='lastName'>LastName</label>
        <input type='text' name='lastName' value={lastName} placeholder='Enter last name' onChange={onInputLastNameChange} />
      </div>
      <div className=''>
        <label htmlFor='name'>Birthday</label>
        <input type='date' min='1900-01-01' max='2020-12-31' value={birthDay} onChange={onInputBirthDateChange} />
      </div>
      <button type='submit'>submit</button>
    </form>
  );
};

export default UserForm;

//    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />

/*

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
*/

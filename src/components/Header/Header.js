import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Library App</h1>
      <div className='links'>
        <NavLink to='/' className='link' activeClassName='active' exact>
          Books List
        </NavLink>
        <NavLink to='/add' className='link' activeClassName='active'>
          Add Book
        </NavLink>
        <NavLink to='/users' className='link' activeClassName='active'>
          Users List
        </NavLink>
        <NavLink to='/users-add' className='link' activeClassName='active'>
          Add User
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

/*
        <Route render={(props) => <AddBook {...props} books={books} setBooks={setBooks} />} path='/add' />
            <Route render={(props) => <AddUser {...props} users={users} setUsers={setUsers} />} path='/users-add' />
            <Route render={(props) => <UsersList {...props} users={users} setUsers={setUsers} />} path='/users' />
            <Route render={(props) => <EditBook {...props} books={books} setBooks={setBooks} />} path='/edit/:id' />
            <Route render={(props) => <EditUser {...props} users={users} setUsers={setUsers} />} path='users/edit/:id' />
*/

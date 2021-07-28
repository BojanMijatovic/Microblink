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
        <NavLink to='/book-add' className='link' activeClassName='active'>
          Add Book
        </NavLink>
        <NavLink to='/users' className='link' activeClassName='active'>
          Users List
        </NavLink>
        <NavLink to='/user-add' className='link' activeClassName='active'>
          Add User
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

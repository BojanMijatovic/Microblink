import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Library App</h1>
      <div className={styles.header_links}>
        <NavLink to='/' className={styles.header_link} activeClassName='is-active' exact>
          Books List
        </NavLink>
        <NavLink to='/add' className={styles.header_link} activeClassName='is-active'>
          Add Book
        </NavLink>
        <NavLink to='/users' className={styles.header_link} activeClassName='is-active'>
          Users List
        </NavLink>
        <NavLink to='/users-add' className={styles.header_link} activeClassName='is-active'>
          Add User
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

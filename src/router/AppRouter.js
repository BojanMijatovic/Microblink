import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import AddBook from '../components/Books/AddBook';
import BooksList from '../components/Books/BookList';
import AddUser from '../components/Users/AddUser';
import UsersList from '../components/Users/UserList';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className='main-content'>
          <Switch>
            <Route component={BooksList} path='/' exact={true} />
            <Route component={AddBook} path='/book-add' />
            <Route component={BooksList} path='/book-list' />
            <Route component={AddUser} path='/user-add' />
            <Route component={UsersList} path='/users' />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

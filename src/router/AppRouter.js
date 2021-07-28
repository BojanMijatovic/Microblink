import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import AddBook from '../components/Books/AddBook';
import BooksList from '../components/Books/BookList';
import AddUser from '../components/Users/AddUser';
import UsersList from '../components/Users/UserList';
import EditBook from '../components/Books/Book/EditBook';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import UseLocalStorage from '../components/hooks/UseLocalStorage';

const AppRouter = () => {
  const [books, setBooks] = UseLocalStorage('books', []);
  const [users, setUsers] = UseLocalStorage('users', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className='main-content'>
          <Switch>
            <Route render={(props) => <BooksList {...props} books={books} setBooks={setBooks} />} path='/' exact={true} />
            <Route render={(props) => <AddBook {...props} books={books} setBooks={setBooks} />} path='/add' />
            <Route render={(props) => <AddUser {...props} users={users} setUsers={setUsers} />} path='/users-add' />
            <Route render={(props) => <UsersList {...props} users={users} setUsers={setUsers} />} path='/users' />
            <Route render={(props) => <EditBook {...props} books={books} setBooks={setBooks} />} path='/edit/:id' />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

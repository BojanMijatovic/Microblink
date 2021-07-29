import React from 'react';
import { useHistory } from 'react-router-dom';
import ShowBooks from './ShowBooks/ShowBooks';
import Date from './Date/Date';
import styles from './User.module.scss';
import ButtonGroup from '../../../style/ui/ButtonGroup/ButtonGroup';
import Buttons from '../../../style/ui/Buttons/Buttons';
import List from '../../../style/ui/List/List';

const User = ({ id, name, lastName, date, onClickRemoveUser, takenBooks }) => {
  const history = useHistory();

  const onTakeBook = () => {
    history.push(`/`);
    console.log(id);
    console.log(name);
  };

  return (
    <List>
      <div className={styles.user}>
        <h3 className={styles.user_name}>Name: {name}</h3>
        <h4 className={styles.user_lastName}>LastName: {lastName}</h4>
        <Date date={date} />
      </div>

      <ShowBooks takenBooks={takenBooks} />

      <ButtonGroup>
        <Buttons onClick={() => onTakeBook(id)}>Take</Buttons>
        <Buttons onClick={() => history.push(`users-add/edit/${id}`)}>Edit</Buttons>
        <Buttons onClick={() => onClickRemoveUser(id)}>Delete</Buttons>
      </ButtonGroup>
    </List>
  );
};

export default User;

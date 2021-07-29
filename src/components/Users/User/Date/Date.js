import React from 'react';
import styles from './Date.module.scss';

const Date = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  /*
  ovde ima bug iz nekog razloga ne moze lepo da prikazuje datum kada se refresuje stranica
  nisam uspeo da ga resim
  */
  const year = date.toLocaleString('en-US', { year: 'numeric' });
  return (
    <div className={styles.date}>
      <p>Date of birth: </p>
      <div className={styles.date_info}>
        <p>{day}</p>
        <p>{month}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default Date;

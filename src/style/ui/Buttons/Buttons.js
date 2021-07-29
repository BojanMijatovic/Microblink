import React from 'react';

import './Buttons.scss';

const Buttons = (props) => {
  const classes = 'book_btn ' + props.className;
  return (
    <button type={props.type} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Buttons;

/*

    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
*/

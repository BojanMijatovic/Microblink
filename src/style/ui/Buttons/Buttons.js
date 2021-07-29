import React from 'react';

import './Buttons.scss';

const Buttons = (props) => {
  const classes = 'book_btn ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Buttons;

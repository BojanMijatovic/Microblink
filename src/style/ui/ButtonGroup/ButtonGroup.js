import React from 'react';

import './ButtonGroup.scss';

const ButtonGroup = (props) => {
  const classes = 'book_groupBtns ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default ButtonGroup;

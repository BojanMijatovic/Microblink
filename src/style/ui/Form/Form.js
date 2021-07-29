import React from 'react';

import './Form.scss';

const Form = (props) => {
  const classes = 'form ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Form;

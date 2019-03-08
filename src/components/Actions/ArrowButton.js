import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button';


export const ArrowButton = ({ direction, onClick }) => {
  let symbol = null;

  switch (direction) {
    case 'right': symbol = '\u2192'; break;
    case 'left': symbol = '\u2190'; break;
    default: symbol = '\u2192'; break;
  }

  return (
    <Button onClick={onClick} light>
      { symbol }
    </Button>
  );

};

ArrowButton.propTypes = {
  onClick: PropTypes.func,
};

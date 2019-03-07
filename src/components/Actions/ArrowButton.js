import React from 'react';

import { Button } from '../Button/Button';


export const ArrowButton = ({ direction }) => {
  let symbol = null;

  switch (direction) {
    case 'right': symbol = '\u2192'; break;
    case 'left': symbol = '\u2190'; break;
    default: symbol = '\u2192'; break;
  }

  return (
    <Button danger>
      { symbol }
    </Button>
  );

};

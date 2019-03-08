import React from 'react';

import { Button } from '../Button/Button';
import { Control } from '../Control/Control';


export const OptionButton = ({ children, ...props }) => {
  if (!props.primary)
    props.info = true;

  if (!props.filled)
    props.outline = true;

  return (
    <Control>
      <Button {...props}>
        { children }
      </Button>
    </Control>
  );
};

export const SubmitButton = ({ children, ...props }) => {
  return (
    <OptionButton primary filled {...props}>
      { children }
    </OptionButton>
  );
};

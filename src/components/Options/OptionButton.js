import React from 'react';

import { Button } from '../Button/Button';


export const OptionButton = ({ children, ...props }) => {
  if (!props.primary)
    props.info = true;

  if (!props.filled)
    props.outline = true;

  return (
    <p className="control">
      <Button {...props}>
        { children }
      </Button>
    </p>
  );
};

export const SubmitButton = ({ children }) => {
  return (
    <OptionButton primary filled>
      { children }
    </OptionButton>
  );
};

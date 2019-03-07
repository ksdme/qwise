import React from 'react';

import { OptionButton, SubmitButton } from './OptionButton';


export class OptionPanel extends React.Component {

  render() {
    return (
      <div className="field is-grouped is-grouped-centered">
        <OptionButton>A</OptionButton>
        <OptionButton>B</OptionButton>
        <OptionButton>C</OptionButton>
        <OptionButton>D</OptionButton>
        <SubmitButton>Submit</SubmitButton>
      </div>
    );
  }

}

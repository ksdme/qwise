import './OptionPanel.css';

import React from 'react';

import { OptionButton, SubmitButton } from './OptionButton';
import { react } from '../../dollar';


export class OptionPanel extends React.Component {

  render() {
    const topClasses = react.ifClasses({
      box: true,
      fixed: this.props.fixed,
    });

    return (
      <div className={topClasses}>
        <div className="field is-grouped is-grouped-centered">
          { this.props.leftContent }
          <OptionButton>A</OptionButton>
          <OptionButton>B</OptionButton>
          <OptionButton>C</OptionButton>
          <OptionButton>D</OptionButton>
          <SubmitButton>Submit</SubmitButton>
          { this.props.rightContent }
        </div>
      </div>
    );
  }

}

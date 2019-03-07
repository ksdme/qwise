import './OptionPanel.css';

import React from 'react';

import { OptionButton, SubmitButton } from './OptionButton';
import { react } from '../../dollar';


export class OptionPanel extends React.Component {

  constructor() {
    super();

    this.state = {
      options: {
        A: false,
        B: false,
        C: false,
        D: false,
      },
    };
  }

  select(option) {
    const postSelectOptions = {};

    Object.keys(this.state.options).forEach((key) => {
      postSelectOptions[key] = option === key;
    });

    this.setState({
      options: postSelectOptions,
    });
  }

  render() {
    const topClasses = react.ifClasses({
      box: true,
      fixed: this.props.fixed,
    });

    return (
      <div className={topClasses}>
        <div className="field is-grouped is-grouped-centered">
          { this.props.leftContent }

          {
            Object.keys(this.state.options).map((key) => (
              <OptionButton
                key={key}
                filled={this.state.options[key]}
                onClick={() => this.select(key)}>
                { key }
              </OptionButton>
            ))
          }

          <SubmitButton>Submit</SubmitButton>
          { this.props.rightContent }
        </div>
      </div>
    );
  }

}

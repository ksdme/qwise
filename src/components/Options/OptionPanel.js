import './OptionPanel.css';

import React from 'react';

import { OptionButton, SubmitButton } from './OptionButton';
import { react } from '../../dollar';


export class OptionPanel extends React.Component {

  constructor() {
    super();

    this.baseOptions = {
      A: false,
      B: false,
      C: false,
      D: false,
    };

    this.state = {
      options: { ...this.baseOptions },
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

  localOnSubmit(onSubmit) {
    const options = this.state.options;
    let selected = null;
    let flag = false;

    Object.keys(options).forEach((key) => {
      if (flag) return;

      flag = options[key] === true;
      if (flag) selected = key;
    });

    this.setState({
      options: { ...this.baseOptions },
    });

    if (flag) onSubmit(selected);
  }

  render() {
    const { onSubmit } = this.props;
    const wrappedOnSubmit = () => this.localOnSubmit(onSubmit);

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

          <SubmitButton onClick={wrappedOnSubmit}>
            Submit
          </SubmitButton>

          { this.props.rightContent }
        </div>

        { this.props.bottomContent }
      </div>
    );
  }

}

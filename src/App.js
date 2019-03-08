import './App.css';

import React, { Component } from 'react';

import { QuestionSource } from './sources/questions';
import { QuestionProvider } from './providers/Questions';
import { AppTags } from './components/AppTags/AppTags';
import { Question } from './components/Question/Question';
import { Section } from './components/Section/Section';
import { OptionPanel } from './components/Options/OptionPanel';
import { Control } from './components/Control/Control';
import { ArrowButton } from './components/Actions/ArrowButton';
import { Message } from './components/Message/Message';


class App extends Component {

  constructor() {
    super();

    this.state = {
      current: {
        a: "A",
        tags: ["Math", "Medium", "Algebra"],
        q: "http://localhost:5000/Selection_216.bmp",
        status: null,
      },
    };
  }

  onSubmitAnswer(selected) {
    const status = selected === this.state.current.a;

    this.setState({
      current: {
        ...this.state.current,
        status,
      },
    });
  }

  answerSelectedToComponent() {
    if (this.state.current.status !== null) {
      if (this.state.current.status === true) {
        return (
          <Message primary>
            Correct Answer <br/>
            Good Work!
          </Message>
        );
      }

      if (this.state.current.status === false) {
        return (
          <Message danger>
            Wrong Answer <br/>
            Correct Option is { this.state.current.a }
          </Message>
        );
      }
    }

    return null;
  }

  render() {
    return (
      <QuestionProvider value={QuestionSource}>
        <Section>
          <div className="container is-centered">
            <AppTags />

            <Question
              className="has-xl-padding"
              url={this.state.current.q} />

            <OptionPanel fixed
              onSubmit={this.onSubmitAnswer.bind(this)}
              leftContent={<Control><ArrowButton direction='left' /></Control>}
              rightContent={<Control><ArrowButton direction='right' /></Control>}
              bottomContent={this.answerSelectedToComponent()}
            />
          </div>
        </Section>
      </QuestionProvider>
    );
  }
}

export default App;

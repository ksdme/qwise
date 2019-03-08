import './App.css';

import React, { Component } from 'react';

import { QuestionSource } from './sources/questions';
import { AppTags } from './components/AppTags/AppTags';
import { Question } from './components/Question/Question';
import { Section } from './components/Section/Section';
import { OptionPanel } from './components/Options/OptionPanel';
import { Control } from './components/Control/Control';
import { ArrowButton } from './components/Actions/ArrowButton';
import { Message } from './components/Message/Message';
import { random } from './dollar';


class App extends Component {

  constructor() {
    super();

    this.pseudo = {
      tags: [],
      list: [],
      rand: null,
    };

    this.state = {
      // holds question
    };

    // Questions Source
    this.questions = QuestionSource;
    this.pseudo.rand = this.getSuitableRand();
  }

  getSuitableRand() {
    const max = this.pseudo.list.length - 1;
    return random.nonRecurringRandIntGenerator(0, max);
  }

  syncQuestions() {
    const tags = this.pseudo.tags;
    const list = this.questions.getStrictTagged(...tags);

    this.pseudo.list = list;
    this.pseudo.rand = this.getSuitableRand();
  }

  loadSomeQuestion() {
    const local = this.pseudo.rand();

    if (local === undefined)
      this.setState({
        q: null,
        a: null,
        status: null,
      });

    else
      this.setState({
        ...this.pseudo.list[local],
        status: null,
        selected: null,
      });
  }

  onSubmitAnswer(selected) {
    const status = selected === this.state.a;

    this.setState({
      ...this.state,
      selected,
      status,
    });
  }

  answerSelectedToComponent() {
    if (this.state.status !== null) {
      if (this.state.status === true) {
        return (
          <Message primary>
            <span role="img" aria-label="Yay!">🎉</span> Correct Answer <br/>
            <span className="tag is-light">Correct Option is { this.state.a }</span>
          </Message>
        );
      }

      if (this.state.status === false) {
        return (
          <Message danger>
            <span role="img" aria-label="Wrong">😞</span> Wrong Answer <br/>
            <span className="tag is-light">
              Correct Option is { this.state.a } <br/>
              Your answer was { this.state.selected }
            </span>
          </Message>
        );
      }
    }

    return null;
  }

  onTagSelectionUpdate(tags) {
    this.pseudo.tags = tags;
    this.syncQuestions();
  }

  componentWillMount() {
    if (this.pseudo.list.length === 0) {
      this.syncQuestions();
      this.loadSomeQuestion();
    }
  }

  render() {
    const nextQuestion = (
      <Control>
        <ArrowButton
          onClick={this.loadSomeQuestion.bind(this)}
          direction='right' />
      </Control>
    );

    return (
      <Section>
        <div className="container is-centered">
          <AppTags
            tags={this.questions.getAvailableTags()}
            onTagSetChanged={this.onTagSelectionUpdate.bind(this)} />

          <Question
            className="has-xl-padding"
            url={this.state.q} />

          {
            (this.state.a) ?
              <OptionPanel fixed
                onSubmit={this.onSubmitAnswer.bind(this)}
                rightContent={nextQuestion}
                bottomContent={this.answerSelectedToComponent()}
              /> :
              null
          }
        </div>
      </Section>
    );
  }
}

export default App;

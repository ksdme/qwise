import './App.css';

import React, { Component } from 'react';

import { QuestionProvider } from './providers/Questions';
import { Question } from './components/Question/Question';
import { Section } from './components/Section/Section';
import { OptionPanel } from './components/Options/OptionPanel';
import { InlineTagButton } from './components/InlineTagButton/InlineTagButton';
import { InlineTagButtonSet } from './components/InlineTagButton/InlineTagButtonSet';
import { Control } from './components/Control/Control';
import { ArrowButton } from './components/Actions/ArrowButton';


class App extends Component {
  render() {
    return (
      <QuestionProvider>
        <Section>
          <div className="container is-centered">
            <InlineTagButtonSet centered>
              <InlineTagButton>Hello</InlineTagButton>
              <InlineTagButton>World</InlineTagButton>
              <InlineTagButton>This</InlineTagButton>
              <InlineTagButton>is</InlineTagButton>
              <InlineTagButton>me!</InlineTagButton>
            </InlineTagButtonSet>

            <Question
              className="has-large-padding"
              url='http://localhost:5000/Selection_216.bmp' />

            <OptionPanel fixed
              leftContent={<Control><ArrowButton direction='left' /></Control>}
              rightContent={<Control><ArrowButton direction='right' /></Control>}
            />
          </div>
        </Section>
      </QuestionProvider>
    );
  }
}

export default App;

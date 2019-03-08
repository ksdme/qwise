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
  render() {
    return (
      <QuestionProvider value={QuestionSource}>
        <Section>
          <div className="container is-centered">
            <AppTags />

            <Question
              className="has-xl-padding"
              url='http://localhost:5000/Selection_216.bmp' />

            <OptionPanel fixed
              onSubmit={() => alert(123)}
              leftContent={<Control><ArrowButton direction='left' /></Control>}
              rightContent={<Control><ArrowButton direction='right' /></Control>}
              bottomContent={<Message danger>Wrong Answer<br/>Hello</Message>}
            />
          </div>
        </Section>
      </QuestionProvider>
    );
  }
}

export default App;

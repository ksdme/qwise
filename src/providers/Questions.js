import React from 'react';

import { QuestionSource } from '../sources/questions';


export const QuestionContext = React.createContext(QuestionSource);
export const QuestionProvider = QuestionContext.Provider;

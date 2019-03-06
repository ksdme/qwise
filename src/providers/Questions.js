import React from 'react';

import { react } from '../dollar';
import { QuestionSource } from '../sources/questions';


export const QuestionContext = React.createContext(QuestionSource);
export const QuestionProvider = react.repacked(QuestionContext.Provider);

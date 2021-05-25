import React, { createContext, useContext, useReducer } from 'react';
import { quizDatabase } from '../database/database';
import { QuizContext, State } from './quizContext.type';
import { quizReducer } from './quizReducer';

export const initialStates: State = {
	quiz: quizDatabase,
	currentQuestionNumber: -1,
	score: 0,
	result: {
		quizId: '',
		resultArray: [],
	},
	currentQuiz: null,
};
const AppContext = createContext<QuizContext>({} as QuizContext);
export const QuizProvider: React.FC = ({ children }) => {
	const [quizState, quizDispatch] = useReducer(quizReducer, initialStates);
	return (
		<AppContext.Provider value={{ quizState, quizDispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export const useQuiz = () => {
	return useContext(AppContext);
};
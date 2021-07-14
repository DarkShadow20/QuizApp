import React, { createContext, useContext, useReducer,useEffect } from 'react';
import { QuizContext, State } from './quizContext.type';
import { quizReducer } from './quizReducer';
import axios from "axios";
export const initialStates: State = {
	quiz: [],
	currentQuestionNumber: -1,
	score: 0,
	result: {
		quizId: '',
		resultArray: [],
	},
	currentQuiz: null,
	currentUserScoreBoard:[]
};
const AppContext = createContext<QuizContext>({} as QuizContext);
export const QuizProvider: React.FC = ({ children }) => {
	const [quizState, quizDispatch] = useReducer(quizReducer, initialStates);
	useEffect(() => {
		(async function () {
			try {
				const {
					data: { quiz },
					status,
				} = await axios.get("https://QuizApp.kunalgupta9.repl.co/quiz");
				if (status === 200) {
					quizDispatch({ type: 'LOAD_QUIZ', payload: quiz });
				}
			} catch (error) {}
		})();
	}, []);
	return (
		<AppContext.Provider value={{ quizState, quizDispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export const useQuiz = () => {
	return useContext(AppContext);
};
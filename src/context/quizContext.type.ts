import { Quiz, QuizDataBase } from '../database/database.type';

export type Result = {
	id: string;
	hasTaken: boolean;
	selectedOption: string;
	correctOption: string;
};
export type State = {
	quiz: Quiz[];
	currentQuestionNumber: number;
	score: number;
	result: {
		quizId: string;
		resultArray: Result[];
	};
	currentQuiz: null | Quiz;
};

export type QuizContext = {
	quizState: State;
	quizDispatch: React.Dispatch<any>;
};

export type ActionType =
	| { type: 'LOAD_QUIZ'; payload: QuizDataBase }
	| { type: 'INCREMENT_QUESTION_NUMBER'; payload?: number }
	| { type: 'UPDATE_SCORE'; payload: { points: number } }
	| { type: 'INITIALIZE_QUESTION_NUMBER_AND_SCORE' }
	| { type: 'UPDATE_RESULT'; payload: Result }
	| { type: 'UPDATE_QUIZID'; payload: string }
	| { type: 'LOAD_CURRENT_QUIZ'; payload: Quiz };
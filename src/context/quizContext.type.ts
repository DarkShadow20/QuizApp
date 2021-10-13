import { Quiz, QuizDataBase } from '../database/database.type';

export type AuthenticationContextType = {
    isUserLogin: boolean,
    loginUserWithCredentials: (email: string, password: string) => any
    signinUser: (name: string, email: string, password: string) => any
    LogOut: () => void,
	token:string,
	email:string
}
export type Result = {
	id: string;
	hasTaken: boolean;
	selectedOption: string;
	correctOption: string;
};
export type UserBoard = {
	id: string;
	numberOfAttempts: Number;
	quizId: Quiz;
	score: Number;
	userId: String;
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
	currentUserScoreBoard:UserBoard[];
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
	| { type: 'LOAD_CURRENT_QUIZ'; payload: Quiz }
	| { type: 'LOAD_CURRENT_USER_SCORE_BOARD'; payload: UserBoard[] };

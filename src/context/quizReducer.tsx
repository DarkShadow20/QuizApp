import { State, ActionType } from './quizContext.type';

export const quizReducer = (state: State, action: ActionType): State => {
	switch (action.type) {
		case 'LOAD_QUIZ':
			return {
				...state,
				quiz: action.payload,
			};
		case 'INCREMENT_QUESTION_NUMBER':
			return {
				...state,
				currentQuestionNumber: state.currentQuestionNumber + 1,
			};
		case 'UPDATE_SCORE':
			return {
				...state,
				score: state.score + action.payload.points,
			};
		case 'INITIALIZE_QUESTION_NUMBER_AND_SCORE':
			return {
				...state,
				currentQuestionNumber: 0,
				score: 0,
			};
		case 'UPDATE_RESULT':
			return {
				...state,
				result: {
					...state.result,
					resultArray: [...state.result?.resultArray, action.payload],
				},
			};
		case 'UPDATE_QUIZID':
			return {
				...state,
				result: { ...state.result, quizId: action.payload, resultArray: [] },
			};
		case 'LOAD_CURRENT_QUIZ':
			return { ...state, currentQuiz: action.payload };
		case 'LOAD_CURRENT_USER_SCORE_BOARD':
				return { ...state, currentUserScoreBoard: action.payload };
		default:
			return state;
	}
};
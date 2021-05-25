import { Result } from '../context/quizContext.type';
import { Quiz } from '../database/database.type';

const getAttemptedPercentage = (resultArray: Result[]): number => {
	const attemptedQuizArray = resultArray.filter((result) => result.hasTaken);
	return attemptedQuizArray.length;
};

const getRightAnswers = (resultArray: Result[]): number => {
	const rightAnswers = resultArray.filter(
		(result) => result.correctOption === result.selectedOption,
	);
	return rightAnswers.length;
};

const getWrongAnswers = (resultArray: Result[]): number => {
	const wrongAnswers = resultArray.filter(
		(result) => result.correctOption !== result.selectedOption,
	);
	return wrongAnswers.length;
};

const getTotalScore = (currentQuiz: Quiz | null): number => {
	const totalScore = currentQuiz?.questions.reduce((acc, curr) => {
		return acc + curr.points;
	}, 0);

	return totalScore ? totalScore : 0;
};

const getCurrentQuestion = (
	resultArray: Result[],
	quizId: string,
): Result | null => {
	const currentQuestion = resultArray.find((result) => result.id === quizId);
	return currentQuestion ? currentQuestion : null;
};

const isOptionSelected = (
	resultArray: Result[],
	optionId: string,
	quizId: string,
) => {
	const currentQuestion = getCurrentQuestion(resultArray, quizId);
	if (currentQuestion?.selectedOption === optionId) {
		return true;
	}
	return false;
};

const isRightAnswer = (
	resultArray: Result[],
	optionId: string,
	quizId: string,
): boolean => {
	const currentQuiz = resultArray.find((result) => result.id === quizId);
	return currentQuiz?.correctOption === optionId;
};

const styleRightAndWrongAnswers = (
	resultArray: Result[],
	optionId: string,
	quizId: string,
) => {
	if (isRightAnswer(resultArray, optionId, quizId)) {
		return 'bg-success text-white';
	}
	if (
		isOptionSelected(resultArray, optionId, quizId) &&
		!isRightAnswer(resultArray, optionId, quizId)
	) {
		return 'bg-danger text-white';
	}

	return '';
};

export {
	getAttemptedPercentage,
	getRightAnswers,
	getTotalScore,
	getWrongAnswers,
	getCurrentQuestion,
	styleRightAndWrongAnswers,
	isOptionSelected,
	isRightAnswer,
};
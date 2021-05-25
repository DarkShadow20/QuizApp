import { useQuiz } from '../../context/quizContext';
import {
	styleRightAndWrongAnswers,
	isOptionSelected,
	isRightAnswer,
} from '../../utils/utils';

export const CheckAnswers = () => {
	const {
		quizState: { result, currentQuiz },
	} = useQuiz();

	const getStyleForRightAndWrongOptions = (
		optionId: string,
		quizId: string,
	) => {
		const rightAndWrongStyles = styleRightAndWrongAnswers(
			result.resultArray,
			optionId,
			quizId,
		);
		return rightAndWrongStyles ? rightAndWrongStyles : '  bg-light text-dark';
	};

	return (
		<div className='d-flex flex-column justify-content-center align-items-center text-muted'>
			<div className='text'>Check Answers</div>
			<div >
				{currentQuiz?.questions.map((quiz, index) => {
					return (
						<div
							className='d-flex flex-column justify-content-center align-items-center px-1'
							key={index}>
							<div className='question fs-4'>
								{index + 1}. {quiz.question}
							</div>
							<div className='d-flex flex-column mb-4 '>
								{quiz.options.map((option) => {
									return (
										<div
											className={` px-4 py-2 rounded-lg mb-4 rounded  ${getStyleForRightAndWrongOptions(
												option.id,
												quiz.id,
											)}`}>
											{isOptionSelected(
												result.resultArray,
												option.id,
												quiz.id,
											) ? (
												isRightAnswer(
													result.resultArray,
													option.id,
													quiz.id,
												) ? (
													<div className='d-flex justify-content-between align-items-center '>
														<span>{option.text}</span>
														
													</div>
												) : (
													<div className='d-flex justify-content-between align-items-center '>
														<span>{option.text}</span>
														
													</div>
												)
											) : (
												option.text
											)}
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
import { useQuiz } from '../../context/quizContext';
import { CheckAnswers } from './CheckAnswers';
import { Header } from '../Header/Header';
import {
	getAttemptedPercentage,
	getRightAnswers,
	getTotalScore,
	getWrongAnswers,
} from '../../utils/utils';
import { Navigate } from 'react-router';
export const Scoreboard = () => {
	const { quizState } = useQuiz();
	return quizState.currentQuiz ? (
		<div className='relative'>
			<Header />
			<div className='d-flex flex-row bd-highlight mb-2 d-flex justify-content-evenly text-muted'>
						<span className='text text-muted text-center'>Your score</span>
						<span className='text text-muted text-center'>
							{quizState.score} / {getTotalScore(quizState?.currentQuiz)}
						</span>
			</div>
			<div className='container text-center'>
				<div className='text-muted fs-3 row row-cols-2'>
					<div className='col '>
						<span>{getAttemptedPercentage(quizState.result.resultArray)}</span>
						<span className='fs-4 px-2 '>Attempted</span>
					</div>

					<div className='col '>
						<span>{getRightAnswers(quizState.result.resultArray)}</span>
						<span className='fs-4 px-2'>Correct</span>
					</div>
				
					<div className='col'>
						<span>{quizState.result.resultArray.length}</span>
						<span className='fs-4 px-2'>Total Questions</span>
					</div>
					<div className='col'>
						<span>{getWrongAnswers(quizState.result.resultArray)}</span>
						<span className='fs-4 px-2'>wrong</span>
					</div>
                </div>
			</div>
			<CheckAnswers />
		</div>
	) : (
		<Navigate to='/dashboard'></Navigate>
	);
};
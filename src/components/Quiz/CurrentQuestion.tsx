import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { useQuiz } from '../../context/quizContext';
import { Quiz } from '../../database/database.type';
import "./CurrentQuestion.css";
import axios from "axios";

type Prop={
    currentQuiz:Quiz
}

export const CurrentQuestion=({currentQuiz}:Prop)=>{
    const navigate = useNavigate();
	const {quizId}=useParams()
	const {token}=useAuth();
	const { quizState, quizDispatch } = useQuiz();
	const [disableButtons, setDisableButtons] = useState(false);
	const [optionId, setOptionId] = useState('');

    const nextQuestion = () => {
		quizDispatch({ type: 'INCREMENT_QUESTION_NUMBER' });
		setDisableButtons(false);
		if (!optionId) {
			quizDispatch({
				type: 'UPDATE_RESULT',
				payload: {
					id: currentQuiz.questions[quizState.currentQuestionNumber].id,
					hasTaken: false,
					selectedOption: '',
					correctOption: currentQuiz.questions[
						quizState.currentQuestionNumber
					].options.find((option) => option.isRight)?.id,
				},
			});
		}
		setOptionId('');
	};
    const isRightAnswer = (isRight: boolean, selectedOption: string) => {
		if (isRight) {
			quizDispatch({
				type: 'UPDATE_SCORE',
				payload: {
					points:
						currentQuiz?.questions[quizState.currentQuestionNumber].points,
				},
			});
		} else {
			quizDispatch({
				type: 'UPDATE_SCORE',
				payload: {
					points:
						currentQuiz?.questions[quizState.currentQuestionNumber]
							.negativePoints,
				},
			});
		}
		setOptionId(selectedOption);
		setDisableButtons((disableButtons) => !disableButtons);
		quizDispatch({
			type: 'UPDATE_RESULT',
			payload: {
				id: currentQuiz.questions[quizState.currentQuestionNumber].id,
				hasTaken: true,
				selectedOption: selectedOption,
				correctOption: currentQuiz.questions[
					quizState.currentQuestionNumber
				].options.find((option) => option.isRight)?.id,
			},
		});
	};
    const styleRightAndWrongAnswers = (
		isRight: boolean,
		selectedButtonId: string,
	): string => {
		if (isRight && selectedButtonId === optionId) {
			return 'btn btn-success';
		}
		if (!isRight && selectedButtonId === optionId) {
			return 'btn btn-danger';
		}
		return '';
	};

	const viewScore = async () => {
		navigate(`/quiz/${currentQuiz.id}/scoreboard`, { replace: true });
		if (!optionId) {
			quizDispatch({
				type: 'UPDATE_RESULT',
				payload: {
					id: currentQuiz.questions[quizState.currentQuestionNumber].id,
					hasTaken: false,
					selectedOption: '',
					correctOption: currentQuiz.questions[
						quizState.currentQuestionNumber
					].options.find((option) => option.isRight)?.id,
				},
			});
		}
		if(token){
			try{
				const {
					data: { attemptedQuizScores },
					status
				}=await axios({
					method:'POST',
					url:'https://f9beb2dd-98bc-4d32-b98c-2be892155154.id.repl.co/score/scoreboard',
					data:{
						score:quizState.score,
						quizId
					},
					headers:{
						authorization:token
					},
				});
				if(status===200){
					quizDispatch({type:'LOAD_CURRENT_USER_SCORE_BOARD',payload:attemptedQuizScores})
				}
			}
			catch(error){
				console.error({error})
			}
		}
	};
    return (
        <>
            <div className='text text-muted text-center'>{`${currentQuiz.genre} quiz`}</div>
            <div className='d-flex flex-row bd-highlight mb-2 d-flex justify-content-evenly text-muted'>
					<div className='d-flex justify-content-start '>
						<span className="fs-4 fw-bold">
							{quizState.currentQuestionNumber + 1}
						</span>
						<span className='fs-3 '>/{currentQuiz.questions.length}</span>
					</div>
					<div className='d-flex align-items-center'>
						<span className="fs-4">SCORE:</span>
						<span className='fs-2 fw-bold'>{quizState.score}</span>
					</div>
				</div>
                <div className='d-flex flex-column bd-highlight justify-content-center align-items-center'>
                    <div className='question d-flex flex-row bd-highlight mb-2 d-flex justify-content-evenly text-muted text-center fs-3'>
						    {currentQuiz.questions[quizState.currentQuestionNumber].question}
					</div>
                    <div className='option d-flex flex-column'>
						{currentQuiz.questions[quizState.currentQuestionNumber].options.map(
							(option) => {
								return (
									<button
										className={`option-btn rounded ${
											styleRightAndWrongAnswers(option.isRight, option.id)
												? styleRightAndWrongAnswers(option.isRight, option.id)
												: 'bg-light text-dark'
										}`}
										key={option.id}
										onClick={() => isRightAnswer(option.isRight, option.id)}
										disabled={disableButtons}>
										{option.text}
									</button>
								);
							},
						)}
					</div>
                    {quizState.currentQuestionNumber ===
				        currentQuiz.questions.length - 1 ? (
					    <button
						    className='btn-view'
						    onClick={viewScore}>
						    View Score
					    </button>
				) : (
					<button
						className='btn-view'
						onClick={nextQuestion}>
						Next Question
					</button>
				)}
                </div>
               
        </>
    )
}
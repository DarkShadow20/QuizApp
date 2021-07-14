import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useQuiz } from "../../context/quizContext";
import { UserBoard } from "../../context/quizContext.type";
import { getTotalScore } from "../../utils/utils";
import {Link} from "react-router-dom";

export const Scorecard=({quizRecord}:{quizRecord:UserBoard})=>{
    const {id,quizId,score,numberOfAttempts}=quizRecord
    const {token}=useAuth();
    const {quizDispatch}=useQuiz();
    const takeQuiz=(quizId:string)=>{
        console.log(quizId)
        quizDispatch({
            type:'INITIALIZE_QUESTION_NUMBER_AND_SCORE',
        })
        quizDispatch({
            type:'UPDATE_QUIZID',
            payload:quizId
        });
        
    }
    const navigate=useNavigate();
    useEffect(()=>{
        !token && navigate('/');
        //eslint-disable-next-line
    },[token])
    return (
		<div className='text-left w-75 border border-2 border-secondary rounded d-flex mt-2 justify-content-between '>
			<div key={id} className='d-flex flex-column justify-content-between'>
				<h2 className='text-muted ms-1 '>{quizId.genre}</h2>
				<div className='p-2'>
					<span className='text-info'>
						Score
					</span>{' '}
					: <span className='fs-4 fw-bold text-muted'>{score}</span> /{' '}
					{getTotalScore(quizId)}
				</div>
				<div className='p-2'>
					<span className='text-info'>
						Number of Attempts
					</span>{' '}
					: <span className='fs-4 fw-bold text-muted'>{numberOfAttempts}</span>
				</div>
			</div>
			<Link to={`/quiz/${quizRecord.quizId.id}`} >  
				<button
					className='py-2 px-2  outline-none mt-2 me-2'
					onClick={() => takeQuiz(quizRecord.quizId.id)}>
					RETAKE QUIZ
				</button>
			</Link>
		</div>
	);
}
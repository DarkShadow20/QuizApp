import {useEffect } from "react";
import {useParams} from "react-router";
import { useQuiz } from '../../context/quizContext';
import { CurrentQuestion } from './CurrentQuestion';

export const Quiz=()=>{
    const {quizState,quizDispatch}=useQuiz();
    const { quizId } = useParams();

    useEffect(()=>{
        const findCurrentQuiz=quizState.quiz.find((quiz)=>{return quiz.id===quizId})
        quizDispatch({type:"LOAD_CURRENT_QUIZ",payload:findCurrentQuiz})
        //eslint-disable-next-line
    },[])

    return (
        <>
            {quizState.currentQuiz && 			
            quizState.currentQuiz.questions[quizState.currentQuestionNumber] ? (
                <CurrentQuestion currentQuiz={quizState.currentQuiz} />
                ) : (
                    <p>Your quiz has ended</p>
                )}    
        </>
    )
}
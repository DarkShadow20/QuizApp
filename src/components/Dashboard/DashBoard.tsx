import { useState } from 'react';
import { useQuiz } from '../../context/quizContext';
import { Quiz } from '../../database/database.type';
import { Header } from '../Header/Header';
import "./DashBoard.css"
import { Modal } from './Modal';

export const Dashboard=()=>{
    const { quizState } = useQuiz();
    const [show,setShow]=useState(false)
    const [quizId,setId]=useState("")
    const quizCard = (quiz: Quiz) => {
		return (
                <div className="col" key={quiz._id}>
                    <div className="card h-100">
                        <img src={quiz.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{quiz.genre}</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button
                                    className="btn btn-light"
                                    id={quiz._id}
                                    onClick={() => {
                                        setShow(true)
                                        setId(quiz._id)}}>
                                    TAKE QUIZ
                                </button>
                        </div>
                    </div>
                </div>
		);
	};
	return (
		<div>
			<Header />
			<div className="row row-cols-1 row-cols-md-3 g-4">
            {show &&(<Modal setShow={setShow} quizId={quizId} />)}
				{quizState.quiz.map((quiz) => {
					return quizCard(quiz);
				})}
			</div>
		</div>
	);
};
import "./Modal.css"
import {Link} from "react-router-dom";
import { useQuiz } from "../../context/quizContext";

export const Modal=({...props})=>{
    const {quizDispatch} = useQuiz();
    const takeQuiz = (quizId: string) => {
		quizDispatch({
			type: 'UPDATE_QUIZID',
			payload: quizId,
		});
		quizDispatch({
			type: 'INITIALIZE_QUESTION_NUMBER_AND_SCORE',
		});
	};
    return(
       <div className="instruction-modal">
           <div className="in instruction-modal modal-header ">
                <div className="fs-3">Instructions</div>
                <ul className="fs-5 mt-5 ">
                    <li className="mt-2">There are negative marks for wrong answer</li>
                    <li className="mt-2">There are two questions. Marking is different for both</li>
                    <li className="mt-2">After completion you can check the answer</li>
                    <li className="mt-2">Don't refresh during the quiz</li>
                </ul>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={()=>props.setShow(false)}>Close</button> 
                    <Link to={`/quiz/${props.quizId}`} key={props.quizId}>
                        <button type="button" className="btn btn-primary" onClick={() => takeQuiz(props.quizId)}>Proceed</button>
                    </Link>
                 </div>
           </div>
       </div>
    )
}
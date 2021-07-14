import { Header } from "../Header/Header";
import { useQuiz } from '../../context/quizContext';
import {Scorecard} from "./Scorecard";
import {Link} from "react-router-dom";


export const ScoreTracker=()=>{
    const {quizState:{currentUserScoreBoard}}=useQuiz();
    console.log(currentUserScoreBoard)
    return(
        <>
            <Header/>
            <div className="text text-muted text-center">My ScoreBoard</div>
            <div className="d-flex flex-column align-items-center">
                {currentUserScoreBoard.length!==0?(
                    currentUserScoreBoard.map((quizRecord)=>{
                        return <Scorecard quizRecord={quizRecord} key={quizRecord.id}/>
                    })
                ):(
                    <div>
                        <span className="fs-4 fw-bold">
                            You haven't attempted any quizes
                        </span>
                        <Link to ={`/dashboard`}>
                            <button className="btn-view">Explore Quizzes</button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}
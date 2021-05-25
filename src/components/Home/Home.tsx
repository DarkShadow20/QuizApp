import {Link} from "react-router-dom";
import { Header } from "../Header/Header";
import "./Home.css";

export const Home=()=>{
    return(
        <div style={{position:"relative" }}>
             <Header/>
            <div className="display-4">
                Welcome To NeoQuiz
               
                </div>
            <div className="explore" >
                <div className="text-explore">Are you interested in sports?</div>
                <div className="text-explore-bottom">Try some quizes if you are</div>
               <Link to={'/dashboard'}>
                   <button className="btn btn-dark">Explore Quizes</button>
               </Link>
            </div>       
        </div>
    )
}
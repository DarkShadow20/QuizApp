import './App.css';
import { Home ,Dashboard,Quiz,Scoreboard, Login, SignUp,ScoreTracker} from './components';
import { Routes, Route } from 'react-router-dom';
import {PrivateRoute} from "./PrivateRoute";
import { useEffect } from 'react';
import { useAuth } from './context/AuthProvider';
import axios from 'axios';
import { useQuiz } from './context/quizContext';
function App() {
  const {token}=useAuth();
  const {quizDispatch}=useQuiz();
  console.log(token)
  useEffect(()=>{
    token && (async function(){
      const {
        data:{ attemptedQuizScores },
        status,
      }=await axios({
        method:'GET',
        url:'https://QuizApp.kunalgupta9.repl.co/score/scoreboard',
        headers:{
          authorization:token,
        }
      });
      if(status===200){
        console.log(attemptedQuizScores)
        quizDispatch({type:'LOAD_CURRENT_USER_SCORE_BOARD',payload:attemptedQuizScores})
      }
    })()
    //eslint-disable-next-line
  },[token])
  return (
    <div className="App">
      <Routes>
      				<Route path='/dashboard' element={<Dashboard />}></Route>
              <PrivateRoute path='/quiz/:quizId' element={<Quiz />}/>
              <Route path='/quiz/:quizId/scoreboard' element={<Scoreboard />}></Route>
              <Route path='/profile/:username' element={<ScoreTracker/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Home ,Dashboard,Quiz,Scoreboard, Login, SignUp} from './components';
import { Routes, Route } from 'react-router-dom';
import {PrivateRoute} from "./PrivateRoute";
function App() {
  return (
    <div className="App">
      <Routes>
      				<Route path='/dashboard' element={<Dashboard />}></Route>
              <PrivateRoute path='/quiz/:quizId' element={<Quiz />}/>
              <Route path='/quiz/:quizId/scoreboard' element={<Scoreboard />}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

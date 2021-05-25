import './App.css';
import { Home ,Dashboard,Quiz,Scoreboard} from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      				<Route path='/dashboard' element={<Dashboard />}></Route>
              <Route path='/quiz/:quizId' element={<Quiz />}></Route>
              <Route path='/quiz/:quizId/scoreboard' element={<Scoreboard />}></Route>
              <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

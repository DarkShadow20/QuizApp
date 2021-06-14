import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from "react-router-dom";
import { QuizProvider } from './context/quizContext';
import { AuthProvider } from './context/AuthProvider';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QuizProvider>
        <AuthProvider>
          <App/>
        </AuthProvider>
      </QuizProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



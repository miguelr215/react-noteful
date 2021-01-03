import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
import AppRefactored from './WithContext/AppRefactored';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <AppRefactored />
  </BrowserRouter>, 
  document.getElementById('root'));

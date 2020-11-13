import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import AddButton from './AddButton/AddButton';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className='App'>
        <header className='noteHeader'>
          <h1>Noteful</h1>
        </header>
        <div className='mainDisplay'>
          <div className='sidebar'>
            <SideBar></SideBar>
          </div>
          <main className='listDisplay'></main>
        </div>
      </div>
    );
  }
}

export default App;

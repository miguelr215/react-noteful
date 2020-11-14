import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListDisplay from './ListDisplay/ListDisplay';
import SideBar from './SideBar/SideBar';
import AddNoteButton from './AddNoteButton/AddNoteButton';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className='App'>
        <header className='noteHeader'>
          <h1>Noteful</h1>
        </header>
        <div className='mainDisplay'>
          <aside className='sidebar'>
            <SideBar></SideBar>
          </aside>
          <main className='listDisplay'>
            <ListDisplay />
            <AddNoteButton />
          </main>
        </div>
      </div>
    );
  }
}

export default App;

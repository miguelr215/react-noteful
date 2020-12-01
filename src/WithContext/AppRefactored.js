// this is BRANCH:  react-noteful-context
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NoPageFound from '../NoPageFound/NoPageFound';
import NoSideBar from '../NoSideBar/NoSideBar';
import NoteListNav from './NoteListNav/NoteListNav';
import NotePageNav from './NotePageNav/NotePageNav';
import NoteListMain from './NoteListMain/NoteListMain';
import NotePageMain from './NotePageMain/NotePageMain';
import NotefulContext from '../NotefulContext';
import config from '../config';
// import STORE from './dummy-store';
import './AppRefactored.css';

class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount(){
    console.log(config.GET_FOLDER);
    console.log(config.GET_NOTES);
    Promise.all([
      fetch(config.GET_NOTES),
      fetch(config.GET_FOLDER)
    ])
      .then(([notesRes, foldersRes]) => {
        if(!notesRes.ok){
          return notesRes.json().then(e => Promise.reject(e));
        }
        if(!foldersRes.ok){
          return foldersRes.json().then(e => Promise.reject(e));
        }
        return Promise.all([notesRes.json(), foldersRes.json()])
      })
      .then(([notes, folders]) => {
        this.setState({notes, folders})
      })
      .catch(error => {
        console.error(error)
      });
  }

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    })
  }

  renderSidebar(){
    return (
      <div className='sidebar'>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
            exact
            path={path}
            key={path}
            component={NoteListNav}
            />
        ))}
        <Route path='/note/:noteId' component={NotePageNav} />
        <Route path='/add-folder' component={NotePageNav} />
        <Route path='/add-note' component={NotePageNav} />
        {/* <Route component={NoSideBar} /> */}
      </div>
    )
  }

  renderMainDisplay(){
    return(
        <div className='MainListDisplay'>
            {['/', '/folder/:folderId'].map(path => (
                <Route 
                    exact
                    path={path}
                    key={path}
                    component={NoteListMain}
                />
            ))}
            <Route path='/note/:noteId' component={NotePageMain}/>
            {/* <Route component={NoPageFound} /> */}
        </div>
    )
  }

  render(){
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote
    }
    
    return (
      <NotefulContext.Provider value={contextValue}>
      <div className='App'>
        <header className='noteHeader'>
          <h1>
            <Link to='/' className='header'>
              Noteful
            </Link>
          </h1>
        </header>
        <div className='mainDisplay'>
          <aside className='sidebar'>
            {this.renderSidebar()}
          </aside>
          <main className='listDisplay'>
            {this.renderMainDisplay()}
          </main>
        </div>
      </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;

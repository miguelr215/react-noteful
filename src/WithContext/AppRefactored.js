// this is BRANCH:  react-noteful-context
import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NoPageFound from '../NoPageFound/NoPageFound';
import NoSideBar from '../NoSideBar/NoSideBar';
import NoteListNav from './NoteListNav/NoteListNav';
import NotefulContext from '../NotefulContext';
import config from './config';
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
      .then((notesRes, foldersRes) => {
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
        
      </div>
    )
  }

  renderMainDisplay(){

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
            <Switch>
              <Route 
                exact
                path='/'
                render={() =>
                  <SideBar
                    folders={database}
                    onFolderChange={this.updateFolder} 
                  />
                }/>
              <Route 
                path={`/folder/:${folderId}`}
                render={() =>
                  <SideBar 
                    folders={database}
                    onFolderChange={this.updateFolder}
                    selectedFolderId={folderId}
                  />}/>
              <Route 
                path={`/note/:${noteId}`}
                render={({ history }) =>
                  <OpenFolder
                    folders={database}
                    selectedNoteId={noteId}
                    onBack={() => history.goBack()} 
                  />}/>
              <Route component={NoSideBar}/>
            </Switch>
          </aside>
          <main className='listDisplay'>
            <Switch>
              <Route 
                exact
                path='/'
                render={() =>
                  <ListDisplay 
                    notes={database}
                    onNoteChange={this.updateNote}
                  />
                }/>
              <Route 
                path={`/folder/:${folderId}`}
                render={() =>
                  <FolderDisplay 
                    notes={database}
                    selectedFolderId={folderId}
                    onNoteChange={this.updateNote}
                  />}
                />
              <Route 
                path={`/note/:${noteId}`}
                render={() => 
                  <NoteDetails 
                    notes={database}
                    selectedNoteId={noteId}
                    onNoteChange={this.updateNote}
                  />}
                />
              <Route component={NoPageFound}/>
            </Switch>
          </main>
        </div>
      </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;

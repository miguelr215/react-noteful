import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ListDisplay from './ListDisplay/ListDisplay';
import SideBar from './SideBar/SideBar';
import FolderDisplay from './FolderDisplay/FolderDisplay';
import OpenFolder from './OpenFolder/OpenFolder';
import STORE from './dummy-store';
import './App.css';

class App extends Component {
  state = {
    database: STORE,
    folderId: '',
    noteId: ''
  }

  updateFolder = (newFolderId) => {
    console.log(newFolderId)
    this.setState({
      folderId: newFolderId
    })
  }

  updateNote = (newNoteId) => {
    console.log(newNoteId)
    this.setState({
      noteId: newNoteId
    })
  }

  render(){
    const { database, folderId, noteId } = this.state
    console.log(database);
    return (
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
                render={() =>
                  <OpenFolder
                    folders={database}
                    selectedNoteId={noteId} />}/>
              <Route />
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
                  />
                }/>
              <Route 
                path={`/folder/:${folderId}`}
                render={() =>
                  <FolderDisplay 
                    notes={database}
                    selectedFolderId={folderId}/>}
                />
              <Route />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

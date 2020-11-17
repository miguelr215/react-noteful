import React, { Component } from 'react';
import './OpenFolder.css';

class OpenFolder extends Component {
    render(){
        const selectedNoteId = this.props.selectedNoteId;
        const selectedNote = this
            .props
            .folders
            .notes
            .find(note => note.id === selectedNoteId);
        
        const folderFromNote = this
            .props
            .folders
            .folders
            .find(folder => folder.id === selectedNote.folderId);

        return(
            <div className='openFolder'>
                <button className='goBackbtn'>
                    Go Back
                </button>
                <h5><i>Viewing Folder:</i></h5>
                <h2 className='viewingFolder'>{folderFromNote.name}</h2>
            </div>
        )
    }
}

export default OpenFolder;
import React, { Component } from 'react';
import Note from '../Note/Note';
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import './FolderDisplay.css';

class FolderDisplay extends Component {

    render(){
        console.log(this.props.notes.notes);
        const notesInSelectedFolder = this
            .props
            .notes
            .notes
            .filter(note => note.folderId === this.props.selectedFolderId);
        console.log(notesInSelectedFolder);
        const filteredNotes = notesInSelectedFolder.map((note, index) => 
            <Note 
                {...note}
                key={index}
            />)
        return(
            <div className='folderList'>
                {filteredNotes}
                <AddNoteButton />
            </div>
        )
    }
}

export default FolderDisplay;
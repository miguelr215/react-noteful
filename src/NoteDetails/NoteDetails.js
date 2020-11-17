import React, { Component } from 'react';
import Note from '../Note/Note';
import './NoteDetails.css';

class NoteDetails extends Component {
    render(){
        const selectedNote = this
            .props
            .notes
            .notes
            .find(note => note.id === this.props.selectedNoteId);
        
        return(
            <div className='noteDetailBox'>
                <Note 
                    {...selectedNote}
                    onNoteChange={this.props.onNoteChange}
                />
                <p>{selectedNote.content}</p>
            </div>
        )
    }
}

export default NoteDetails;
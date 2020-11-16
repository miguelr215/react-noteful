import React, { Component } from 'react';
import './OpenFolder.css';

class OpenFolder extends Component {
    render(){
        const folderIdFromNote = this
            .props
            .folders
            .notes
            .find(note => note.folderId === this.props.selectedNoteId) /*wrong */
        return(
            <div className='openFolder'>
                <button>
                    Go Back
                </button>
                <h2>{/*folder name*/}</h2>
            </div>
        )
    }
}

export default OpenFolder;
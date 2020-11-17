import React, { Component } from 'react';
import Note from'../Note/Note';
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import './ListDisplay.css';

class ListDisplay extends Component {
    render(){
        console.log(this.props.notes);
        const notes = this
            .props
            .notes
            .notes
            .map((note, index) => 
                <Note 
                    {...note} 
                    key={index}
                    onNoteChange={this.props.onNoteChange} />)
        return(
            <div className='list'>
                {notes}
                <AddNoteButton />
            </div>
        )
    }
}

export default ListDisplay;
import React from 'react';
import FullNote from '../FullNote/FullNote';
import NotefulContext from '../../NotefulContext';
import { findNote } from '../notes-helpers';
import './NotePageMain.css';

export default class NotePageMain extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = NotefulContext;

    handleDeleteNote = noteId => {
        this.props.history.push('/')
    }

    render(){
        const { notes=[] } = this.context;
        const { noteId } = this.props.match.params;
        const note = findNote(notes, noteId) || {content: ''};
        return(
            <section className='NotePageMain'>
                <FullNote 
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    onDeleteNote={this.handleDeleteNote}
                />
                <div className='NotePageMain_content'>
                    {note.content.split(/\n \r|\n/).map((para, i) =>
                        <p key={i}>{para}</p>
                    )} 
                </div>
            </section>
        )
    }
}
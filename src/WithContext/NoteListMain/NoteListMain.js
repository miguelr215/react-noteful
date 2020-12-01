import React from 'react';
import { Link } from 'react-router-dom';
import { getNotesForFolder } from '../notes-helpers';
import FullNote from '../FullNote/FullNote';
import PillButton from '../PillButton/PillButton';
import NotefulContext from '../../NotefulContext';
import './NoteListMain.css';

export default class NoteListMain extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = NotefulContext;
    
    render(){
        const { folderId } = this.props.match.params;
        const { notes=[] } = this.context;
        const notesForFolder = getNotesForFolder(notes, folderId);
        console.log(folderId)
        console.log(notes)
        console.log(notesForFolder)
        return(
            <section className='NoteListMain'>
                <ul>
                    {notesForFolder.map(note =>
                        <li key={note.id}>
                            <FullNote 
                                id={note.id}
                                name={note.name}
                                modified={note.modified}
                            />
                        </li>)}
                </ul>
                <div className='NoteListMain_button-container'>
                    <PillButton
                        tag={Link}
                        to='/add-note'
                        type='button'
                        className='NoteListMain_add-note-button'>
                        Add Note
                    </PillButton>
                </div>
            </section>
        )
    }
}
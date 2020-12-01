import React from 'react';
import PillButton from '../PillButton/PillButton';
import NotefulContext from '../../NotefulContext';
import { findFolder, findNote } from '../notes-helpers';
import './NotePageNav.css';

export default class NotePageNav extends React.Component {
    static defaultProps = {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }

    static contextType = NotefulContext;

    render(){
        const { notes, folders } = this.context;
        const { noteId } = this.props.match.params;
        const note = findNote(notes, noteId) || {};
        const folder = findFolder(folders, note.folderId);
        return(
            <div className='NotePageNav'>
                <PillButton
                    tag='button'
                    role='link'
                    onClick={() => this.props.history.goBack()}
                    className='NotePageNav_backBtn'
                >
                    Back
                </PillButton>
                {folder && (
                    <h3 className='NotePageNav_folderName'>
                        {folder.name}
                    </h3>
                )}
            </div>
        )
    }
}

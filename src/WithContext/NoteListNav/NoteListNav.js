import React from 'react';
import { Link } from 'react-router-dom';
import PillButton from '../PillButton/PillButton';
import NotefulContext from '../../NotefulContext';
import { countNotesForFolder } from '../notes-helpers';
import './NoteListNav.css';

export default class NoteListNav extends React.Component {
    static contextType = NotefulContext;

    selectFolderId = (newFolder) => {
        console.log(newFolder)
    }

    render(){
        const { folders=[], notes=[], folderId } = this.context;

        return(
            <div className='NoteListNav'>
                <ul className='NoteListNav_list'>
                    {folders.map(folder =>
                        <li key={folder.id}>
                            <Link 
                                className={folder.id === folderId ? 'NoteListNav_folderLink selectedFolder' : 'NoteListNav_folderLink'}
                                to={`/folder/${folder.id}`}
                                onClick={e => this.selectFolderId(folder.id)}
                            >
                                <span className='NoteListNav_num-notes'>
                                    {countNotesForFolder(notes, folder.id)}
                                </span>
                                {folder.name}
                            </Link>
                        </li>
                    )}
                </ul>
                <div className='NoteListNav_buttonWrapper'>
                    <PillButton>
                        Add Folder
                    </PillButton>
                </div>
            </div>
        )
    }
};

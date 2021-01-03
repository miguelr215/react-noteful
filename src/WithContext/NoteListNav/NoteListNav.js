import React from 'react';
import { Link } from 'react-router-dom';
import PillButton from '../PillButton/PillButton';
import NotefulContext from '../../NotefulContext';
import { countNotesForFolder } from '../notes-helpers';
import './NoteListNav.css';

export default class NoteListNav extends React.Component {
    static contextType = NotefulContext;

    render(){
        const { folders=[], notes=[], folderId } = this.context;

        return(
            <div className='NoteListNav'>
                <ul className='NoteListNav_list'>
                    {folders.map(folder =>
                        <li key={folder.id}>
                            {console.log('map folder: ' + folder.id)}
                            {console.log('context folder: ' + folderId)}
                            <Link 
                                className={folder.id === folderId ? 'NoteListNav_folderLink selectedFolder' : 'NoteListNav_folderLink'}
                                to={`/folder/${folder.id}`}
                                onClick={e => this.context.selectFolderId(folder.id)}
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
                    <PillButton
                        tag={Link}
                        type='button'
                        to='/add-folder'
                    >
                        Add Folder
                    </PillButton>
                </div>
            </div>
        )
    }
};

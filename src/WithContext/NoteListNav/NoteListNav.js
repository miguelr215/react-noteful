import React from 'react';
import { Link } from 'react-router-dom';
import PillButton from '../PillButton/PillButton';
import NotefulContext from '../../NotefulContext';
import './NoteListNav.css';

export default class NoteListNav extends React.Component {
    static contextType = NotefulContext;

    render(){
        const { folders=[], notes=[] } = this.context;

        return(
            <div className='NoteListNav'>
                <ul className='NoteListNav_list'>
                    {folders.map(folder =>
                        <li key={folder.id}>
                            <Link 
                                className='NoteListNav_folderLink'
                                to={`/folder/${folder.id}`}
                            >
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

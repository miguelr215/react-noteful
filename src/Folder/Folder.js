import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './Folder.css';

class Folder extends Component {
    static contextType = NotefulContext;

    render(){
        const folders = this.context.folderList || {};
        const selectedFolderId = this.context.folderId || '';

        const folderClass = selectedFolderId === folders.id
            ? 'folder selected'
            : 'folder';
        return(
            <Link 
                to={`/folder/:${folders.id}`}
                className={folderClass} 
                key={folders.id}
                onClick={() => this.context.updateFolder(folders.id)}
            >
                {folders.name}
            </Link>
        )
    }
}

export default Folder;
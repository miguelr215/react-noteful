import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './Folder.css';

class Folder extends Component {
    static contextType = NotefulContext;

    render(){
        

        const folderClass = this.props.selectedFolderId === this.props.id
            ? 'folder selected'
            : 'folder';
        return(
            <Link 
                to={`/folder/:${this.props.id}`}
                className={folderClass} 
                key={this.props.id}
                onClick={e => this.props.onFolderChange(this.props.id)}
            >
                {this.props.name}
            </Link>
        )
    }
}

export default Folder;
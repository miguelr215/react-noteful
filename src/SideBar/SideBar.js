import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import AddFolderButton from '../AddFolderButton/AddFolderButton';
import './SideBar.css';

class SideBar extends Component {
    render(){
        // console.log(this.props.folders.folders);
        const folders = this
            .props
            .folders
            .folders
            .map((folder, index) => 
                <Folder 
                    {...folder} 
                    key={index}
                    selectedFolderId={this.props.selectedFolderId}
                    onFolderChange={this.props.onFolderChange}/>)
        return (
            <div className='sidebar'>
                {folders}
                <AddFolderButton />
            </div>
        )
    }
}

export default SideBar;